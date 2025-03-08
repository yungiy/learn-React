import TodoListItem from './TodoListItem.jsx';

export default function TodoList({todos}) {
  return (
    <div className="min-h-[320px] max-h-[512px] overflow-y-auto">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id}/>
      ))}
    </div>
  )
}