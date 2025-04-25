import React, { useState } from 'react'
import UserCard from './UserCard'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import {useUser} from './UserContext';


const Wrap = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin: 0 250px;
`

const UserList = () => {
    const { users } = useUser(); 
  return (
    <>
        <div>
            <h2>현재 유저</h2>
        </div>
        
        <Wrap>
            {users.map((u,index) => (
                <UserCard user={u} key={index}/>
            ))}
        </Wrap>
    </>
    
  )
}

export default UserList