import React from 'react'
import './App.css'
import Profile from './pages/Profile'
import Users from './pages/Users'

//importar el contexto
import UserState from './context/User/UserState'
const App = () => {
  return (
    <UserState>
    <Users/>
    <Profile/>
    </UserState>
  )
}

export default App
