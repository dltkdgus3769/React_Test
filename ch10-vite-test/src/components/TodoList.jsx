import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <>

            <div className="TodoList">
                <h1>체크됨</h1>
                {todos.filter(todo => todo.checked).map((todo) => (
                    <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
                ))}
            </div>

            <div className="TodoList">
                <h1>체크안됨</h1>
                {todos.filter(todo => !todo.checked).map((todo) => (
                    <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
                ))}
            </div>
        </>
    );
};

export default TodoList;