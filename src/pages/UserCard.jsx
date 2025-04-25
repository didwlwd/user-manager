import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    padding: 20px;
    margin: 10px;
    cursor: pointer;
    box-shadow: 1px 2px 2px ;
    display: inline-block;

    &:hover{
        scale: 1.01;
    }
`

const Img = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 20px;
`

const P = styled.p`
    font-weight: 700;
    text-align: center;
`

const state = (s) =>{
    if(s === true){
        return "🟢 온라인 상태입니다.";
    }else{
        return "🔴 오프라인 상태입니다.";
    }
}

const UserCard = ({user}) => {
    const navigater = useNavigate();
  return (
    <>
        <Card onClick={() => navigater(`/user/${user.id}`)}>
            <Img 
                src={user.img} 
                alt='사진'
            />
            <P>이름 : {user.name}</P>
            <P>나이 : {user.age}</P>
            <P>상태 : {state(user.state)}</P>
        </Card>
    </>
    
  )
}

export default UserCard