import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTaskData } from '../Redux/TaskReducer/action'
import ShowTask from '../Components/ShowTask'

function Task() {

    
    const { tasks, loading, error, success } = useSelector((store) => store.tasksReducer)
    // console.log(tasks)

    const { token, isAuth } = useSelector((store) => store.authReducer)
    console.log(token)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTaskData())
        if (isAuth){
            window.location.reload()
        }

    }, [isAuth])

    


    return (
        <div>
            <h1>Task</h1>

            {
                tasks.map((e) => (

                    <ShowTask key={e._id} {...e} />

                ))
            }
        </div>
    )
}

export default Task
