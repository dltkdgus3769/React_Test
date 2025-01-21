import { useState, useRef, useCallback, useEffect } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  // 고유 id로 사용될 값
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo)); // 새로운 항목 추가
      nextId.current += 1; // nextId를 1씩 증가
    },
    []
  );

  const onRemove = useCallback(
    (id) => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    },
    []
  );

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);



  const count = todos.filter(todo => todo.checked).length;


  const Allcheck = useCallback(() => {
    setTodos((todos) =>
      todos.map((todo) => ({ ...todo, checked: !todo.checked })) // 모든 todo 항목의 checked 값을 true로 설정
    );
  }, []);

  // 체크된 항목만 보기
  const showChecked = useCallback(() => {
    setFilteredTodos(todos.filter(todo => todo.checked === true));
  }, [todos]);

  // 체크되지 않은 항목만 보기
  const showUnChecked = useCallback(() => {
    setFilteredTodos(todos.filter(todo => todo.checked === false));
  }, [todos]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={filteredTodos} onRemove={onRemove} onToggle={onToggle} />
        <div>체크된 갯수 : {count}</div>
        <div>
          <button onClick={Allcheck}>전부 체크</button>
          <button onClick={showChecked}>체크 항목 보기</button>
          <button onClick={showUnChecked}>체크 안한 항목 보기</button>
        </div>
      </TodoTemplate>

    </>
  );
};

export default App;