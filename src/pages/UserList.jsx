import React, { useState } from 'react'
import UserCard from './UserCard'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const UserInput = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 10px;
`

const Wrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

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
    text-align: left;
`

const state = (s) =>{
    if(s === true){
        return "🟢 온라인 상태입니다.";
    }else{
        return "🔴 오프라인 상태입니다.";
    }
}


const UserList = () => {
    const navigater = useNavigate();
    const [newUser, setNewUser] = useState('');
    const [useres, setUsers] = useState([
        {
            id : "user01",
            img : "https://i.namu.wiki/i/8HaG9nx1cPFr2YASv_bTFB2PuEjNSAFtjgO7gT3RHKbe2ydjVaNcDBcB5TFywLISaGQZ1zcUHadH_Y71GMadPgEQVRSlNrtXIKmrNP7V7sSzshev0jcwr_U_7ePLAVzUJdHLyJJKTlG3vHWKM9Uv2A.webp",
            name : "양동민",
            age : "22",
            phone : "010-4444-2222",
            email : "qwe@naver.com",
            state : true 
          },{
            id : "user02",
            img : "https://i.namu.wiki/i/kmTHejQt9PDgXPDphTItSUlTxhIuJ0iS83zX2DnFvKFQuO7rnC-BsW6mjkBtDY2-kEmABeMmBb_XvlQBTXxab049duk7c_D8jmNqT0uyJitVIJNZjf2NWSLjccknlbzpccvg-Q2vT0fH9nwefs8hkg.webp",
            name : "크로크",
            age : "22",
            phone : "010-4444-2222",
            email : "qwe@naver.com",
            state : false
          },{
            id : "user03",
            img : "https://i.namu.wiki/i/EglxtxDW10DclJ2ddU7b_2SEU7nAldu4oUd4Y5KyJupB0BcXNCpwzqCWGIzr_l5ymtqPcr_4AMzzQrZPj7DZQbVLMi8BUI1o_Q1qMrW_HiHRSLnGSqbCDHYM0tuvYH6L-Ncl7B8nQrJMCHGcjfYKxQ.webp",
            name : "사후르",
            age : "22",
            phone : "010-4444-2222",
            email : "qwe@naver.com",
            state : true
          },{
            id : "user04",
            img : "https://i.namu.wiki/i/qanHlymQUmCTP7HChQcKFc0a1XFMY4Ce01MnFuG3rLyYqGSPslehk1TPAyxxkAZCKU3vuWGBD5uDBp_SNlGwtr32-QaPrjBYfLjAwHJLauZy-HPzcnu7Jw1xcAYr_SXgXA0oODwWsGJhftpIqcTJRw.webp",
            name : "리릴리",
            age : "22",
            phone : "010-4444-2222",
            email : "qwe@naver.com",
            state : false
          }
    ]);


  return (
    <>
        <h2>현재 유저</h2>
        <UserInput>
            <button onClick={() => navigater(`/user`)}>유저 등록</button>
        </UserInput>
        <Wrap>
            {useres.map((user) => (
                <Card key={user.id} onClick={() => navigater(`/user/${user.id}`)}>
                <Img 
                    src={user.img} 
                    alt='사진'
                />
                <P>이름 : {user.name}</P>
                <P>나이 : {user.age}</P>
                <P>상태 : {state(user.state)}</P>
            </Card>
            ))}
        </Wrap>
    </>
    
  )
}

export default UserList