import TodoTemplate from './components/TodoTemplate.jsx';
import TodoInsert from './components/TodoInsert.jsx';
import TodoList from './components/TodoList.jsx';
import {useReducer, useRef} from 'react';
import todoReducer from './hooks/todoReducer.jsx';

export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(1);

  const onInsert = text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    dispatch({type: 'INSERT', todo});
    nextId.current += 1;
  };

  const onRemove = id => {
    dispatch({type: 'REMOVE', id});
  };

  const onToggle = id => {
    dispatch({type: 'TOGGLE', id});
  };

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </>
  );
}