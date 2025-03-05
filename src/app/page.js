'use client';
import React, { useState }from "react";
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
export default function Home() {
  const [todos, setTodos] = useState([]);
  // addTodo function ber
  const addTodo = (text) =>{
    setTodos([...todos, {id: Date.now(), text,completed:false}]);
  };

  const toggleTodo = (id) =>{
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo)
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className=" min-h-screen flex items-center justify-center bg-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-black mb-4 text-black text-center"> Todo App</h1>
        <div className="text-black mb-4">

        </div>
        <TodoInput onAdd={addTodo}/>
        <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        />
      </div>
    </div>
  );

}
