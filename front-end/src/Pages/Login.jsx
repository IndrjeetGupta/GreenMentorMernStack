import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import {  handelPostLogin } from '../Redux/TaskReducer/reducer'
import '../CSS/Login.css'
import { getTaskData, handelPostLogin, logoutFun } from '../Redux/AuthReducer/action';
import { Navigate } from 'react-router-dom';

function Login() {
   

    const initiaValue = {
        email: "",
        password: ""
    }

    const [form, setForm] = useState(initiaValue);
    const handelChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }
    const { isAuth,visu } = useSelector((store) => store.authReducer)

    console.log(visu)





    const dispatch = useDispatch()

    const login = () => {
        dispatch(handelPostLogin(form))
    }

    const logoutF = () => {
        dispatch(logoutFun())
    }
if (!isAuth){
    <Navigate  to='/' />
}


    return (
        <div className='login'>


            <h1>Login</h1>

            <input type="email" value={form.email} name='email' onChange={handelChange} placeholder='Enter Email' required  />
            <br />
            <input type="password" value={form.password} name='password' onChange={handelChange} placeholder='Enter Password'
                required />
            <br />

            <button className='lbtn' onClick={login}>Login</button>

         <br />
            <button className='lbtn' onClick={logoutF}>Logout</button>






        </div>
    )
}

export default Login




