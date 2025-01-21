import { useState, useRef, useCallback, useEffect, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import './App.css'

// 초기 데이터 생성 함수
// 추가1
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 5000; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

// todoReducer 함수
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 새 항목 추가
      // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false } }
      return todos.concat(action.todo);

    case 'REMOVE': // 항목 제거
      // { type: 'REMOVE', id: 1 }
      return todos.filter((todo) => todo.id !== action.id);

    case 'REMOVECHECKED': // 항목 제거
      return todos.filter((todo) => !todo.checked);

    case 'TOGGLE': // 체크 상태 토글
      // { type: 'TOGGLE', id: 1 }
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    case 'SEARCH':
      return action.text
        ? todos.filter((todo) => todo.text.includes(action.text))
        : todos;

    default:
      return todos;
  }
}

const App = () => {

  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [searchText, setSearchText] = useState('');

  // 고유 id로 사용될 값
  // ref를 사용하여 변수 담기
  const nextId = useRef(5001);

  // 새 항목 추가
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1; // ID 증가
  }, []);

  // 항목 제거
  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  // 체크 상태 토글
  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  const removeChecked = useCallback(() => {
    dispatch({ type: 'REMOVECHECKED' });
  }, []);

  const onSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // 검색 버튼 클릭 핸들러
  const onSearchClick = () => {
    const filtered = searchText
      ? todos.filter((todo) => todo.text.includes(searchText))
      : todos;
    setFilteredTodos(filtered); // 검색 결과 업데이트
  };



  // const count = todos.filter(todo => todo.checked).length;


  // const Allcheck = useCallback(() => {
  //   setTodos((todos) =>
  //     todos.map((todo) => ({ ...todo, checked: !todo.checked })) // 모든 todo 항목의 checked 값을 true로 설정
  //   );
  // }, []);

  // // 체크된 항목만 보기
  // const showChecked = useCallback(() => {
  //   setFilteredTodos(todos.filter(todo => todo.checked === true));
  // }, [todos]);

  // // 체크되지 않은 항목만 보기
  // const showUnChecked = useCallback(() => {
  //   setFilteredTodos(todos.filter(todo => todo.checked === false));
  // }, [todos]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);




  return (
    <>
      <h1 className='react'>ch11 컴포넌트 성능 최적화</h1>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={filteredTodos} onRemove={onRemove} onToggle={onToggle} />
        <button onClick={removeChecked}>체크 모두 항목 삭제</button>
        <div>
          <input
            placeholder='검색어 입력'
            name='search'
            value={searchText}
            onChange={onSearchChange}
          />
          <button onClick={onSearchClick}>검색</button>
        </div>
      </TodoTemplate>

      {/* <div>체크된 갯수 : {count}</div>
      <div>
        <button onClick={Allcheck}>전부 체크</button>
        <button onClick={showChecked}>체크 항목 보기</button>
        <button onClick={showUnChecked}>체크 안한 항목 보기</button>
      </div> */}

    </>
  );
};

export default App;