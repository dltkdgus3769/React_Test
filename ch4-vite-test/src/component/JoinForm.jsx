import React, { useState } from 'react';

const JoinForm = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })
    const { username, email, password, passwordConfirm } = form;

    const onChange = (e) => {
        setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            }
        )
    }

    const onClick = () => {
        if (!username || !email || !password || !passwordConfirm) {
            alert("모든 값을 입력해주세요.")
            return
        }
        if (password !== passwordConfirm) {
            alert("비밀번호가 일치하지 않습니다.")
            return
        }
        alert("회원가입 완료.")
        setForm({
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
        })
    }


    return (
        <>
            <h1 className='react'>실습, 회원가입 화면.</h1>
            {/* <h2>username : {username} , password : {password}</h2> */}
            <input type='text' name='username' placeholder='사용자명' value={username} onChange={onChange} />
            <input type='text' name='email' placeholder='이메일' value={email} onChange={onChange} />
            <input type='password' name='password' placeholder='패스워드' value={password} onChange={onChange} />
            <input type='password' name='passwordConfirm' placeholder='패스워드 확인' value={passwordConfirm} onChange={onChange} />
            <button onClick={onClick}>로그인</button>
        </>
    );
};

export default JoinForm;