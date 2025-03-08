import TodoListItem from './TodoListItem.jsx';
import React from 'react';

function TodoList({todos, onRemove, onToggle}) {
  return (
    <div className="min-h-[320px] max-h-[512px] overflow-y-auto">
      {todos.map(todo => (
        <TodoListItem
          todo={todo} key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}/>
      ))}
    </div>
  )
}

export default React.memo(TodoList)