import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTaskData } from '../Redux/TaskReducer/action'
import Edit from '../Pages/Edit'
import '../CSS/ShowTask.css'

function ShowTask({ title, description, _id }) {
  const [edit, setEdit] = useState(false)
  const editFun = () => {
    setEdit(!edit)

  }

  const dispatch = useDispatch()

  const handelDelete = (_id) => {
    dispatch(deleteTaskData(_id))

  }
  return (
    <div>




      {edit ? <Edit editFun={editFun} _id={_id} /> : <div className='ptask'>
        <p>Title : {title}</p>
        <p>Description : {description}</p>

      </div>}
      <button className='sbtn' onClick={editFun} >Edit </button>
      <button className='sbtn' onClick={() => handelDelete(_id)}>Delete</button>


    </div>
  )
}

export default ShowTask
