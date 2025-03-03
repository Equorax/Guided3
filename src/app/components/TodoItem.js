import React from "react";

function TodoItem ( { todo, onToggle, onDelete }){
  return (
    <div className="flex items-center gap-4 p-2 border-b border-gray-200">
      {}
      <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => onToggle(todo.id)}
      className="w-4 h-4"/>
      {}
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-black'}`}>
      {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
          Hapus
        </button>
    </div>
  );
}

export default TodoItem;