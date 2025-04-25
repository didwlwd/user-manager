import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route , Link, Routes} from 'react-router-dom'
import UserList from './pages/UserList'
import UserDetail from './pages/UserDetail'
import UserRegistration from './pages/UserRegistration'
import ErrorPage from './pages/ErrorPage'
import { UserProvider } from './pages/UserContext'
import styled from 'styled-components'

const Nav = styled.nav`
  background: #cef6fd;
  height: 100px;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 10px;
`

const NavLink = styled(Link)`
  border-radius: 20px;
  color: black;
  padding: 20px;
  background: white;
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;

  &:hover{
    color: #000000;
    background: #cffddb;
  }
`

function App() {

  return (
    <UserProvider>
        <BrowserRouter>
          <Nav>
            <NavLink to='/'>사용자 목록</NavLink>
            <NavLink to='/user'>사용자 등록</NavLink>
          </Nav>
          <Routes>
            <Route path='/' element={<UserList />}/>
            <Route path='/user/:id' element={<UserDetail />}/>
            <Route path='/user' element={<UserRegistration />}/>
            <Route path='*' element={<ErrorPage />}/>
          </Routes>
        </BrowserRouter>
    </UserProvider>
    
  )
}

export default App
