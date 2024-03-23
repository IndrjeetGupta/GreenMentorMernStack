const { Router } = require("express")

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const taskController = Router();
const { TasktModel } = require('../models/Task.model')


taskController.get('/tasks', async (req, res) => {
    const tasks = await TasktModel.find({ userId: req.body.userId })
    res.send(tasks)
})

taskController.get('/tasks/:taskId', async (req, res) => {
    const { taskId } = req.params

    // if u use this method any user can delete the items  
    // const deleteTask = await TasktModel.findByIdAndDelete({_id : taskId})

    const idTask = await TasktModel.findById({ _id: taskId, userId: req.body.userId })
    res.send(idTask)

})

taskController.post('/tasks', async (req, res) => {
    const { task, title, description, userId } = req.body
    const dataTask = new TasktModel({
        task,
        title,
        description,
        userId,

    })

    try {
        await dataTask.save()
        res.json({ message: "task create" })
        
    }
    catch (err) {
        res.send("something went wrong")
    }
})

taskController.delete('/tasks/:taskId', async (req, res) => {
    const { taskId } = req.params
    // if u use this method any user can delete the items  
    // const deleteTask = await TasktModel.findByIdAndDelete({_id : taskId})

    const deleteTask = await TasktModel.findOneAndDelete({ _id: taskId, userId: req.body.userId })
    if (deleteTask) {
        res.send("task delete")
    }
    else {
        res.send("task counldn't delete")
    }

})
taskController.patch('/tasks/:taskId', async (req, res) => {
    const { taskId } = req.params
    // if u use this method any user can delete the items  
    // const editTask = await TasktModel.findByIdAndDelete({_id : taskId})

    const editTask = await TasktModel.findOneAndUpdate({ _id: taskId, userId: req.body.userId }, { ...req.body })
    if (editTask) {
        res.send("task updated")
    }
    else {
        res.send("task counldn't updated")
    }

})

module.exports = {
    taskController
}