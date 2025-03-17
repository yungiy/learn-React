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

  const onCreate = text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    dispatch({type: 'CREATE', todo});
    nextId.current += 1;
  };

  const onDelete = id => {
    dispatch({type: 'DELETE', id});
  };

  const onComplete = id => {
    dispatch({type: 'COMPLETE', id});
  };

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onCreate}/>
        <TodoList todos={todos} onRemove={onDelete} onToggle={onComplete}/>
      </TodoTemplate>
    </>
  );
}