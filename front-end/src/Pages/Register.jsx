
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handelPostRegi } from '../Redux/AuthRegister/action';
import '../CSS/Register.css'

function Register() {
    const initiaValue = {
        name: "",
        email: "",
        password: ""
    }

    const [form, setForm] = useState(initiaValue);
    const handelChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }
    const { isResiter } = useSelector((store) => store.resiReducer)
    console.log(isResiter)

    const dispatch = useDispatch()

    const submit = () => {
        dispatch(handelPostRegi(form))
        
    }

    return (
        <div  className='parent'>

            <form onSubmit={(e) => e.preventDefault(submit())}>
                <h1>Register</h1>

                <input type="text" value={form.name} name='name' onChange={handelChange} required placeholder='Enter Name'/>
                <br />
                <input type="email" value={form.email} name='email' onChange={handelChange} required  placeholder='Enter Email'/>
                <br />
                <input type="password" value={form.password} name='password' onChange={handelChange}
                 required  placeholder='Enter Password'/>
                <br />
                <input className='btn' type="submit" />
            </form>

        </div>
    )
}

export default Register




