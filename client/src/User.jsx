import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function User() {
    const [users, setUsers] = useState([])
    // {
    //     id: 1,
    //     name: "Greendee", 
    //     email:"greendeeroperpanogalon@gmail.com",
    //     age: 20
    // }

    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

    const deleteUser = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/create" className='btn btn-success'> Add + </Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>(
                            <tr key={user.id}>
                
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-success'> Update </Link>
                                    &nbsp;
                                    <button className='btn btn-warning' 
                                    onClick={(e) => deleteUser(user._id)} >Delete</button>
                                </td>
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default User
