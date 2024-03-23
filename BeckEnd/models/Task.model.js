const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    task: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: true },
})

const TasktModel = mongoose.model("data", taskSchema)

module.exports = {
    TasktModel
}  