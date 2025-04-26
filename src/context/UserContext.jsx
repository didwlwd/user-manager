import React, {createContext, useContext, useState} from 'react'

const UserContext = createContext();

export function UserProvider({children}){
    const useres = [
        {
            img : "https://i.namu.wiki/i/8HaG9nx1cPFr2YASv_bTFB2PuEjNSAFtjgO7gT3RHKbe2ydjVaNcDBcB5TFywLISaGQZ1zcUHadH_Y71GMadPgEQVRSlNrtXIKmrNP7V7sSzshev0jcwr_U_7ePLAVzUJdHLyJJKTlG3vHWKM9Uv2A.webp",
            id : 1,
            name : "양동민",
            age : 22,
            phone : "010-4444-2222",
            email : "qwe@naver.com",
            state : true
          },{
            img : "https://i.namu.wiki/i/kmTHejQt9PDgXPDphTItSUlTxhIuJ0iS83zX2DnFvKFQuO7rnC-BsW6mjkBtDY2-kEmABeMmBb_XvlQBTXxab049duk7c_D8jmNqT0uyJitVIJNZjf2NWSLjccknlbzpccvg-Q2vT0fH9nwefs8hkg.webp",
            id : 2,
            name : "크로크",
            age : 22,
            phone : "010-4444-2222",
            email : "qwe@naver.com",
            state : false
          },{
            img : "https://i.namu.wiki/i/EglxtxDW10DclJ2ddU7b_2SEU7nAldu4oUd4Y5KyJupB0BcXNCpwzqCWGIzr_l5ymtqPcr_4AMzzQrZPj7DZQbVLMi8BUI1o_Q1qMrW_HiHRSLnGSqbCDHYM0tuvYH6L-Ncl7B8nQrJMCHGcjfYKxQ.webp",
            id : 3,
            name : "사후르",
            age : 22,
            phone : "010-4444-2222",
            email : "qwe@naver.com",
            state : true
          },{
            img : "https://i.namu.wiki/i/qanHlymQUmCTP7HChQcKFc0a1XFMY4Ce01MnFuG3rLyYqGSPslehk1TPAyxxkAZCKU3vuWGBD5uDBp_SNlGwtr32-QaPrjBYfLjAwHJLauZy-HPzcnu7Jw1xcAYr_SXgXA0oODwWsGJhftpIqcTJRw.webp",
            id : 4,
            name : "리릴리",
            age : 22,
            phone : "010-4444-2222",
            email : "qwe@naver.com",
            state : false
          }
      ];

      const [users, setUsers] = useState(useres);

      const addUser = (newUser) => {
        const id = users.length + 1;
        setUsers([...users, {...newUser, id}]);
      };

      const deleteUser = (userId) =>{
        setUsers(users.filter(user => user.id !== userId));
      }


    return (
        <UserContext.Provider value={{users,addUser,deleteUser}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){
    return useContext(UserContext);
}