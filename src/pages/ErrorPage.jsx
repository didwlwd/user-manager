import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

    const navigate = useNavigate();

  return (
    <div>
        <h2>어어 뭐하는거야 여길 오면 어떻게 돌아가쇼</h2>
        <h3>아래를 누르고 홈으로 돌아가쇼</h3>
        <button onClick={() => {navigate('/')}}>홈으로 돌아가기</button>
    </div>
  )
}

export default ErrorPage