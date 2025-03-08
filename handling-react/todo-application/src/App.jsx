import TodoTemplate from './components/TodoTemplate.jsx';
import TodoInsert from './components/TodoInsert.jsx';
import TodoList from './components/TodoList.jsx';
import {useCallback, useRef, useState} from 'react';

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'react study',
      checked: true
    }, {
      id: 2,
      text: 'js study',
      checked: true
    },
    {
      id: 3,
      text: 'css study',
      checked: false
    }
  ]);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4)

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  )


  return (

    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos}/>
      </TodoTemplate>
    </>
  )
}