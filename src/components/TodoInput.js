import React, { useState } from 'react';


function TodoInput ({ onAdd }){
  const [input,setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(input.trim()){
      onAdd(input.trim());
    }
    setInput('');
  }

  return (
    <form className='flex gap-4 mb-4' onSubmit={handleSubmit}>
    
      <input type='text' 
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      placeholder='Add new todo...'
      className='flex-1 p-2 border border-gray-300 rounded bg-white text-black'/>
      
      <button type='submit' className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>
        Tambahkan
      </button>
    </form>
  );
}

export default TodoInput;
