import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { List } from 'react-virtualized';
import React, { useCallback } from 'react';

const TodoList = ({ todos, onRemove, onToggle }) => {
    const rowRenderer = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index];
            return (
                <TodoListItem
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style}
                />
            );
        },
        [onRemove, onToggle, todos]
    );

    return (
        // <>
        <List
            className="TodoList"
            width={512} // 전체 너비
            height={513} // 전체 높이
            rowCount={todos.length} // 항목 개수
            rowHeight={57} // 각 항목의 높이
            rowRenderer={rowRenderer} // 항목을 렌더링하는 함수
            list={todos} // 렌더링할 데이터 배열
            style={{ outline: 'none' }} // 기본 outline 스타일 제거
        />
        // <div className="TodoList">
        //     {todos.map((todo) => (
        //         <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
        //     ))}
        // </div> 

        // <div className="TodoList">
        //             <h1>체크됨</h1>
        //             {todos.filter(todo => todo.checked).map((todo) => (
        //                 <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
        //             ))}
        //         </div>

        //         <div className="TodoList">
        //             <h1>체크안됨</h1>
        //             {todos.filter(todo => !todo.checked).map((todo) => (
        //                 <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
        //             ))}
        //         </div>
        // </>
    );
};

export default TodoList;