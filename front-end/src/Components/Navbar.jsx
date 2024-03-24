import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'

function Navbar() {

    const links = [
        { path: "/register", title: "Register" },
        { path: "/login", title: "Login" },
        { path: "/profile", title: "Profile" },
        { path: "/", title: "Task" },
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


