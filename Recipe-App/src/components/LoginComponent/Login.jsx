import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/auth/login', {username, password})
        .then(result => {
            console.log(result)
        }).catch(err => console.log(err))
    }

    return (
        <div className='form-container'>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div className='form-username'>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder='Enter Username' 
                        onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className='form-password'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' 
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button className='submitButton'>submit</button>
                    <Link to='/auth/register'><button className="register-btn">Register</button></Link>
                </form>
            </div>
        </div>
    )
}