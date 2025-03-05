import React from "react";
import TodoItem from './TodoItem'


function TodoList ({ todos, onToggle, onDelete }){
  if(todos.length === 0 ){
    return <div className="text-center text-red-500 p-4 bg-white rounded"> Belum ada todo</div>
  }

  return(
    <div className="mt-4">
      {todos.map(todo => (
        <TodoItem 
        key={todo.id}
        todo={todo}
        onToggle={onToggle}
        onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TodoList
