import React, { useState } from 'react'
import UserCard from './UserCard'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import {useUser} from '../context/UserContext';
import {themeChange} from '../context/BlackOrWhite'

const Header = styled.div`
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
    font-size: 24px;
`

const Wrap = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin: 0 250px;
`

const UserList = () => {
    const { users } = useUser(); 
    const { isDarkmode } = themeChange();
  return (
    <>
        <Header theme={isDarkmode ? 'dark' : 'white'}>
            <h2>사용자 목록</h2>
        </Header>
        
        <Wrap>
            {users.map((u,index) => (
                <UserCard user={u} key={index}/>
            ))}
        </Wrap>
    </>
    
  )
}

export default UserList