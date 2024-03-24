import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../CSS/Profile.css'
import { getProfilekData } from '../Redux/ProfileRedux/action'

function Profile() {

  const { proData } = useSelector((store) => store.profileReducer)

  const {  isAuth, } = useSelector((store) => store.authReducer)
  

  const { success,loading } = useSelector((store) => store.tasksReducer)
  console.log(success)



  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfilekData())

  }, [])


  return (
    <div>
      <h1>Profile</h1>

      <table style={{ textAlign: 'center', margin: "auto", }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>

          </tr>
        </thead>
        <tbody>

          {success ? "" :

            proData.map((e) => (
              <tr key={e._id}>
                <td>{e.name}</td>
                <td>{e.email}</td>

              </tr>
            ))
            
          }


        </tbody>
      </table>

    </div>
  )
}

export default Profile
