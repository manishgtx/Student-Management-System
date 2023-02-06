import { useContext, useState } from 'react'
import {BrowserRouter, Routes,Route, useNavigate} from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import SignUp from './SignUp'
import Nav from './Nav'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
const Container = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="layout">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/'>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='dashboard' element={ currentUser ? <Dashboard/> : <Navigate to='/login'/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Container