import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateTaskData } from '../Redux/TaskReducer/action';

function Edit({editFun, _id}) {
  console.log(_id)
    const initiaValue = {
        title: "",
        description: ""
    }

    const [form, setForm] = useState(initiaValue);


    const handelChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }

    const dispatch = useDispatch()

    const upadateData = () =>{
      dispatch(updateTaskData(_id, form))
    }
    
  return (
    <div className='parent'>
            <form onSubmit={(e) => e.preventDefault(upadateData(editFun()))}>
               
                <input type="text" value={form.title} name='title' onChange={handelChange}/> <br />
                
                <input type="text" value={form.description} name='description' onChange={handelChange} 
                 />
                 <br />
               
                <input className='btn' type="submit" />
            </form>

      
    </div>
  )
}

export default Edit
