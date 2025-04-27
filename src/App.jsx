import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route , Link, Routes} from 'react-router-dom'
import UserList from './pages/UserList'
import UserDetail from './pages/UserDetail'
import UserRegistration from './pages/UserRegistration'
import ErrorPage from './pages/ErrorPage'
import { UserProvider } from './context/UserContext'
import styled from 'styled-components'
import {BlackOrWhite, themeChange} from './context/BlackOrWhite'

const Div = styled.div`
  height: 100%;
  background-color: ${props => props.theme === 'dark' ? '#1d1d1d' : '#ffffff'};
`

const Nav = styled.nav`
  background: ${props => props.theme === 'dark' ? '#142252' : '#cef6fd'};
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

const Button = styled.button`
  border-radius: 20px;
  color: black;
  padding: 20px;
  background: white;
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
  outline: none;

  &:hover{
    color: #000000;
    background: #cffddb;
    outline: none;
    border-color: none;
  }
`
function Appcontent(){
  const { isDarkmode, toggleTheme } = themeChange();

  return(
    <UserProvider>
        <Div theme={isDarkmode ? 'dark' : 'white'}>
          <BrowserRouter>
            <Nav theme={isDarkmode ? 'dark' : 'white'}>
              <NavLink to='/'>사용자 목록</NavLink>
              <NavLink to='/user'>사용자 등록</NavLink>
              <Button onClick={ toggleTheme }>테마 변경</Button>
            </Nav>
            <Routes>
              <Route path='/' element={<UserList />}/>
              <Route path='/user/:id' element={<UserDetail />}/>
              <Route path='/user' element={<UserRegistration />}/>
              <Route path='*' element={<ErrorPage />}/>
            </Routes>
          </BrowserRouter>
        </Div>
      </UserProvider>
  )
}


function App() {
  
  return (
    <BlackOrWhite>
      <Appcontent />
    </BlackOrWhite>
  )
}

export default App
