import React from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminPanel from './pages/AdminPanel'

function App() {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
    <Routes>
      <Route path='/' element={<Navigate to={'/login'}/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>  
      <Route path='/admin_panel' element={<AdminPanel/>} />                    
    </Routes>
     </div>
  )
}

export default App
