import { useState } from 'react'
import './App.css'
import { Registration } from './components/Registration/Registration'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Login} from './components/LoginComponent/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/register' element = {<Registration />}></Route>
        <Route path='/auth/login' element = {<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
