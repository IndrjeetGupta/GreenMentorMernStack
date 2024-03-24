import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Task from '../Pages/Task'
import AddTask from '../Pages/AddTask'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Profile from '../Pages/Profile'


function AllRoutes() {
  return (
    <div >
     <Routes>
        <Route path="/" element={<Task/>}  /> 
        <Route path="/addtask" element={<AddTask/>}  /> 
        <Route path="/login" element={<Login/>}  />
        <Route path="/register" element={<Register/>}  />  
        <Route path="/profile" element={<Profile/>}  /> 
        

      </Routes>
      
    </div>
  )
}

export default AllRoutes
