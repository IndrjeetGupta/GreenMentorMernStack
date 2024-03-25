import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'
import { useSelector } from 'react-redux'

function Navbar() {
    const { token, isAuth, loading, error, success } = useSelector((store) => store.authReducer)

    const links = [
        { path: "/register", title: "Register" },
        { path: "/login", title:  "Login/Logout"  },
        { path: "/", title: "Task" },
        { path: "/profile", title: "Profile" },
        { path: "/addtask", title: "AddTask" },

    ]
    return (
        <div className='navbar'>
            {
                links.map((e) => (
                    <div >
                        <Link className='link' key={e.path} to={e.path}>{e.title}</Link>

                    </div>


                ))
            }


        </div>
    )
}

export default Navbar


