import React, { useState } from 'react';

const LoginForm = () => {

    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const { username, password } = form;

    const onChange = (e) => {
        const nextForm = {
            // ... 스프레드 연산자, 기존 값을 복사를 함. 
            ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name]: e.target.value // 원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    };

    const onClick = () => {
        if (!username || !password) {
            alert("username 과 password 모두 작성해주세요.!!!")
        }
        // console.log("username : " + {username} + "password : "+ {password})
        console.log(`username : ${username}, password : ${password}`)
        setForm({
            username: '',
            password: ''
        });
    };


    //jsx 문법 사용, 화면에 출력
    return (
        <>
            <h1 className='react'>실습, 로그인 화면 만들기.</h1>
            {/* <h2>username : {username} , password : {password}</h2> */}
            <input type='text' name='username' placeholder='사용자명' value={username} onChange={onChange} />
            <input type='password' name='password' placeholder='패스워드' value={password} onChange={onChange} />
            <button onClick={onClick}>로그인</button>
        </>
    );
};

export default LoginForm;