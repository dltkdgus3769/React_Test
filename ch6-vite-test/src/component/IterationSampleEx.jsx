import React, { useState } from 'react';

const IterationSampleEx = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 ID
    const [deletedItem, setDeletedItem] = useState('');
    const [editingId, setEditingId] = useState(null);

    const onChange = (e) => setInputText(e.target.value);

    const onClick = () => {
        if (!inputText.trim()) {
            alert("입력 하세요");
            return;
        }
        const isname = names.filter((name) => name.text === inputText);
        if (isname.length > 0) {
            alert("이미 존재하는 값임.")
            return;
        }

        const nextNames = names.concat({
            id: nextId, // nextId 값을 id로 설정
            text: inputText,
        });
        setNextId(nextId + 1); // nextId 값을 1 증가
        setNames(nextNames); // names 값을 업데이트
        setInputText(''); // inputText를 비운다

    };

    const alertID = (id) => {
        alert(id);
    }

    const onRemove = (text) => {
        const confirmDelete = window.confirm("항목을 삭제하시겠습니까?");
        if (confirmDelete) {
            const updatedNames = names.filter((name) => name.text !== text);
            setNames(updatedNames); // 항목 삭제
            const deleted = names.find((name) => name.text === text); // 삭제된 항목 저장
            setDeletedItem(deleted); // 최근 삭제된 항목 저장
        }
    };
    const sortAscending = () => {
        const sortedNames = [...names].sort((a, b) => a.text.localeCompare(b.text));
        setNames(sortedNames);
    };

    const sortDescending = () => {
        const sortedNames = [...names].sort((a, b) => b.text.localeCompare(a.text));
        setNames(sortedNames);
    };

    const restoreDeletedItem = () => {
        if (deletedItem) {
            const restoredNames = [...names, deletedItem];
            setNames(restoredNames); // 최근 삭제된 항목 복원
            setDeletedItem(null); // 삭제된 항목 초기화
        } else {
            alert("복원할 항목이 없습니다.");
        }
    };

    const startEditing = (id) => {
        setEditingId(id); // 수정할 항목의 id 설정
        const itemToEdit = names.find((name) => name.id === id);
        setInputText(itemToEdit.text); // 수정할 텍스트를 입력란에 설정
    };

    const saveEdit = () => {
        if (!inputText.trim()) {
            alert("입력 하세요");
        } else {
            const updatedNames = names.map((name) =>
                name.id === editingId ? { ...name, text: inputText } : name
            );
            setNames(updatedNames);
            setEditingId(null);
            setInputText('');
        }
    };

    const cancelEdit = () => {
        setEditingId(null);
        setInputText('');
    };


    const namesList = names.map((name) => (
        <>
            <li
                key={name.id}
                onClick={() => alertID(name.id)}
                onContextMenu={(e) => {
                    e.preventDefault();
                    startEditing(name.id);
                }}
            >
                {name.text}
            </li>
            <button onClick={() => onRemove(name.text)}>삭제</button>
        </>
    ));

    return (
        <>
            <input value={inputText} onChange={onChange} placeholder="항목을 입력하세요" />
            <button onClick={onClick}>추가</button>

            {editingId && (
                <div>
                    <button onClick={saveEdit}>수정</button>
                    <button onClick={cancelEdit}>취소</button>
                </div>
            )}

            <button onClick={sortDescending}>내림차순</button>
            <button onClick={sortAscending}>올림차순</button>
            <button onClick={restoreDeletedItem} disabled={!deletedItem}>삭제 취소</button>

            <ul>{namesList}</ul>
        </>
    );
};

export default IterationSampleEx;
