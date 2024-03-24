import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postTaskData } from '../Redux/TaskReducer/action';


function AddTask() {
    const initiaValue = {
        title: "",
        description: ""
    }

    const [form, setForm] = useState(initiaValue);
    const handelChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }
    // const { isResiter } = useSelector((store) => store.resiReducer)
    // console.log(isResiter)

    const dispatch = useDispatch()

    const submit = () => {
        dispatch(postTaskData(form))
        
    }

    return (
        <div className='parent'>
            <form onSubmit={(e) => e.preventDefault(submit())}>
                <h1>Add Task</h1>
                <input type="text" value={form.title} name='title' onChange={handelChange} required placeholder='Enter Title ' />
                <br />
                <input type="text" value={form.description} name='description' onChange={handelChange} placeholder='Enter description '
                 required />
                <br />
                <input className='btn' type="submit" />
            </form>

        </div>
    )
}

export default AddTask




