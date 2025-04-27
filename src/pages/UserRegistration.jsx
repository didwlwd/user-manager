import React, { use, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import {themeChange} from '../context/BlackOrWhite'

const Header = styled.div`
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
    font-size: 24px;
`

const Ul = styled.ul`
    border :1px solid black;
    border-radius: 20px;
    padding: 20px;
    width: 300px;
    margin: 0 auto;
    box-shadow: 1px 2px 1px;
    background-color: white;
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
    const { addUser } = useUser();
    const [formData, setFormData] = useState({
        img : '',
        name : '',
        age : '',
        phone : '',
        email : '',
        state : false,
    });

    const { isDarkmode } = themeChange();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        addUser({
            img : formData.img,
            name : formData.name.trim(),
            age : parseInt(formData.age),
            phone : formData.phone,
            email : formData.email,
            state : formData.state
        })
        navigater("/");
    }

    const handleChange = (ev) =>{
        const { name, value ,type, checked} = ev.target;
        setFormData(prev => ({
            ...prev,
                [name] :type ==="checkbox" ? checked : value
        }))
    }


  return (
    <>
        <Header theme={isDarkmode ? 'dark' : 'white'}>
            <h2>사용자 등록</h2>
        </Header>

        
        <form onSubmit={handleSubmit}>
            <Ul theme={isDarkmode ? 'dark' : 'white'}>
                <Li><Span>이미지 URL</Span> <Input type='text' name='img' value={formData.img} onChange={handleChange} placeholder='이미지 주소를 입력해주세요.'/></Li>
                <Li><Span>name</Span> <Input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='이름을 입력해주세요.'/></Li>
                <Li><Span>age</Span> <Input type='text' name='age' value={formData.age} onChange={handleChange} placeholder='나이를 입력해주세요.'/></Li>
                <Li><Span>phone</Span> <Input type='text' name='phone' value={formData.phone} onChange={handleChange} placeholder='전화번호를 입력해주세요.'/></Li>
                <Li><Span>email</Span> <Input type='text' name='email' value={formData.email} onChange={handleChange} placeholder='이메일을 입력해주세요.'/></Li>
                <Li><Span>state</Span> <label htmlFor='state'><Input type='checkbox' name='state' checked={formData.state} onChange={handleChange}/>상태를 선택해주세요.</label></Li>
            </Ul>

            <Button type='submit'>저장하기</Button>
            <Button type='button' onClick={() => navigater('/')}>목록으로가기</Button>
        </form>
           
        
    </>
    
  )
}

export default UserRegistration