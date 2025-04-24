import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Ul = styled.ul`
    border :1px solid black;
    border-radius: 20px;
    padding: 20px;
`
const Li = styled.li`
    list-style-type: none;
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

  return (
    <>
        <h2>유저 등록</h2>
        <Ul>
            <Li><Span>이미지 URL : </Span> <Input type='text'/></Li>
            <Li><Span>ID :</Span> <Input type='text'/></Li>
            <Li><Span>Img :</Span> <Input type='text'/></Li>
            <Li><Span>name :</Span> <Input type='text'/></Li>
            <Li><Span>age :</Span> <Input type='text'/></Li>
            <Li><Span>phone :</Span> <Input type='text'/></Li>
            <Li><Span>email :</Span> <Input type='text'/></Li>
            <Li><Span>state :</Span> <Input type='text'/></Li>
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