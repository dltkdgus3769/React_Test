import React, { useState } from 'react';

const EventPractice2 = () => {
    // 차이점, useState 훅스 이용한 부분 다름. 
    // 교체작업1-1 기존은 각각의 변수로 설정, -> 해당 객체에 모두 담아서 사용하기. 
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');

    // 교체작업1-1
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    // 교체작업1-2
    const { username, message } = form;

    const [output, setOutput] = useState('');


    // 교체작업1-3
    // const onChangeUsername = (e) => setUsername(e.target.value);
    // const onChangeMessage = (e) => setMessage(e.target.value);

    // const onClick = () => {
    //     alert(username + ': ' + message);
    //     setUsername('');
    //     setMessage('');
    // };
    // 교체작업1-4
    const onChange = (e) => {
        const nextForm = {
            // ... 스프레드 연산자, 기존 값을 복사를 함. 
            ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name]: e.target.value // 원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    };
    // 교체작업1-5
    const onClick = () => {
        // alert(username + ': ' + message);
        if (!username || !message) {
            //!username , 값을 없을 경우 실행하겠다. 
            alert("username 과 message 모두 작성해주세요.!!!")
        }
        setOutput(`username : ${username} , message: ${message}`);

        setForm({
            username: '',
            message: ''
        });
    };

    const onClear = () => {
        setForm({
            username: '',
            message: ''
        });
    }


    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습, 함수형 컴포넌트 버전.</h1>
            {/* <h1>message : {message}</h1>
            <h1>username : {username}</h1> */}
            <h1>출력용 결과 확인 : {output}</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                // 교체작업1-6
                // onChange={onChangeUsername}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                // 교체작업1-7
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
            <button onClick={onClear}>초기화</button>
        </div>
    );
};
export default EventPractice2;