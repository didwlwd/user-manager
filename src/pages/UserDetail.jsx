import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrap = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
  width: 400px;
  margin: 0 auto;
  box-shadow: 1px 2px 1px;
`

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
`

const P = styled.p`
  font-size: 18px;
  font-weight: 700;
`

const BackButton = styled.button`
  margin: 10px;
`

const UserDetail = () => {
  const {id} = useParams();
  const user = users.find(user => user.id === id);
  const navigater = useNavigate();


  const deleteUser = (id) =>{
    if(confirm("정말 삭제하시겠습니까?")){
      
      navigater('/');
    }else{
      alert("취소");
    }

    
  }


  return (
    <>
      <h2>{user.name} 님의 상세 정보 페이지</h2>
      <Wrap>
        <Img src={user.img} alt=''/>
        <P>유저 ID : {user.id}</P>
        <P>이름 : {user.name}</P>
        <P>나이 : {user.age}</P>
        <P>상태 : {user.state}</P>
        <P>전화번호 : {user.phone}</P>
        <P>이메일 : {user.email}</P>
      </Wrap>
      <BackButton onClick={() => navigater('/')}>목록으로가기</BackButton>
      <BackButton onClick={() => deleteUser(user.id) }>유저 삭제하기</BackButton>
    </>
  
  )
}

export default UserDetail