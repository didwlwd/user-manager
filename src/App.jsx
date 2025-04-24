import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route , Link, Routes} from 'react-router-dom'
import UserList from './pages/UserList'
import UserDetail from './pages/UserDetail'
import UserRegistration from './pages/UserRegistration'
import ErrorPage from './pages/ErrorPage'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList />}/>
        <Route path='/user/:id' element={<UserDetail />}/>
        <Route path='/user' element={<UserRegistration/>}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
