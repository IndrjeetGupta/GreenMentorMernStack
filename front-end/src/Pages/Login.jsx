import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import {  handelPostLogin } from '../Redux/TaskReducer/reducer'
import '../CSS/Login.css'
import { getTaskData, handelPostLogin } from '../Redux/AuthReducer/action';

function Login() {
    const initiaValue = {
        email: "",
        password: ""
    }

    const [form, setForm] = useState(initiaValue);
    const handelChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }
    const { token, isAuth, loading, error, success } = useSelector((store) => store.authReducer)
    console.log(isAuth)

    const dispatch = useDispatch()

    const login = () => {
        dispatch(handelPostLogin(form))


    }

    return (
        <div className='login'>

            <h1>Login</h1>

            <input type="email" value={form.email} name='email' onChange={handelChange} required placeholder='Enter Email' />
            <br />
            <input type="password" value={form.password} name='password' onChange={handelChange} placeholder='Enter Password'
                required />
            <br />

            <button className='btn' onClick={login}>Login</button>

        </div>
    )
}

export default Login




