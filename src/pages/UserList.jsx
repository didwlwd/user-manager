import React, { useState } from 'react'
import UserCard from './UserCard'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import {useUser} from '../context/UserContext';
import {themeChange} from '../context/BlackOrWhite';

const Wrap = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin: 0 250px;
`

const UserList = () => {
    const { users } = useUser(); 
    const { theme, toggleTheme } = themeChange;
  return (
    <>
        <div>
            <h2>현재 유저</h2>
        </div>
        
        <div
            style={{
                display : "grid",
                gridTemplateColumns : "25% 25% 25% 25%",
                margin: "0 250px",
                background : theme,
            }}
        >
            {users.map((u,index) => (
                <UserCard user={u} key={index}/>
            ))}
        </div>
    </>
    
  )
}

export default UserList