import { useRef, useCallback, useState } from 'react';
import { produce } from 'immer';
import './App.css'




const App = () => {
  const nextId = useRef(1); // 다음 ID를 저장하는 Ref
  const [form, setForm] = useState({ name: '', username: '' });
  // 입력 폼 상태
  const [data, setData] = useState({
    array: [], // 항목 배열
    uselessValue: null, // 필요 없는 값
  });

  // 입력값 변경을 처리하는 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        // produce(form, (draft) => {
        //   draft[name] = value;
        produce((draft) => {
          draft[name] = value;
        })
      );
    },
    []
  );

  // 폼 제출을 처리하는 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); // 새로고침 방지
      const info = {
        checked: false,
        id: nextId.current, // 고유 ID
        name: form.name,
        username: form.username,
      };


      // 배열에 새 항목 추가
      setData(
        // produce(data, (draft) => {
        //   draft.array.push(info);
        // })
        produce((draft) => {
          if (!info.name.trim() || !info.username.trim()) {
            alert('모든 항목을 입력하세요');
            return;
          }
          const nameExists = draft.array.some((item) => item.name === info.name);
          if (nameExists) {
            alert('존재하는 이름입니다.');
            return;
          }
          draft.array.push(info);
        })
      );

      // 폼 초기화
      setForm({ name: '', username: '' });
      nextId.current += 1; // ID 증가
    },
    [form.name, form.username]
  );

  // 항목 삭제를 처리하는 함수
  const onRemove = useCallback(
    (id) => {
      setData(
        // produce(data, (draft) => {
        //   const index = draft.array.findIndex((info) => info.id === id);
        //   if (index !== -1) {
        //     draft.array.splice(index, 1); // 해당 항목 삭제
        //   }
        // })
        produce((draft) => {
          const index = draft.array.findIndex((info) => info.id === id);
          if (index !== -1) {
            draft.array.splice(index, 1); // 해당 항목 삭제
          }
        })
      );
    },
    []
  );
  const onToggle = useCallback(
    (id) => {
      setData(
        produce((draft) => {
          const item = draft.array.find((info) => info.id === id);
          if (item) {
            item.checked = !item.checked; // 상태 토글
          }
        })
      );
    },
    []
  );

  return (
    <div>
      <h1 className='react'>ch12 immer 불변성 유지 하기</h1>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} style={{ display: 'flex', alignItems: 'center' }}>
              <span
                onClick={() => onToggle(info.id)}
                style={{
                  textDecoration: info.checked ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
              >
                {info.username} ({info.name})
              </span>
              <button
                onClick={() => onRemove(info.id)}
                style={{ marginLeft: '4px' }}
              >
                삭제
              </button>
            </li>

          ))}
        </ul>
      </div>
    </div >
  );
};

export default App;