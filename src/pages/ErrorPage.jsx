import React from 'react'
import { useNavigate } from 'react-router-dom'
import {themeChange} from '../context/BlackOrWhite'
import styled from 'styled-components'

const Header = styled.div`
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
    font-size: 24px;
`

const ErrorPage = () => {

    const navigate = useNavigate();

    const {isDarkmode} = themeChange();

  return (
    <>
      <Header theme={isDarkmode ? 'dark' : 'white'}>
        <h2>여길 찾아 들어오시면 안돼요!</h2>
        <h3>아래를 누르고 홈으로 돌아가주세요!</h3>
    </Header>
    <button onClick={() => {navigate('/')}}>홈으로 돌아가기</button>
    </>
  )
}

export default ErrorPage