import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Ul = styled.ul`
    border :1px solid black;
    border-radius: 20px;
    padding: 20px;
    width: 300px;
    margin: 0 auto;
    box-shadow: 1px 2px 1px;
`
const Li = styled.li`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    margin: 5px;
`
const Span = styled.span`
    font-size: 18px;
    font-weight: 700;
`

const Input = styled.input`
    outline: none;
    padding: 2px 5px;
    
`

const Button = styled.button`
    margin: 10px;
`

const UserRegistration = () => {
    const navigater = useNavigate();
    const [imgURL, setImgURL] = useState('');
    const [ID, setID] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');

  return (
    <>
        <h2>유저 등록</h2>
        <Ul>
            <Li><Span>이미지 URL</Span> <Input type='text'/></Li>
            <Li><Span>ID</Span> <Input type='text'/></Li>
            <Li><Span>name</Span> <Input type='text'/></Li>
            <Li><Span>age</Span> <Input type='text'/></Li>
            <Li><Span>phone</Span> <Input type='text'/></Li>
            <Li><Span>email</Span> <Input type='text'/></Li>
            <Li><Span>state</Span> <Input type='text'/></Li>
        </Ul>

        <Button onClick={() => navigater('/',{
            state : {
                
            }
        })}>저장하기</Button>
        <Button onClick={() => navigater('/')}>목록으로가기</Button>
    </>
    
  )
}

export default UserRegistration