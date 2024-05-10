import React, { useState } from 'react';
 
function TodoEdit({ todo, onUpdate, onCancel }) {
  const [text, setText] = useState(todo);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(text);
  };
 
  const handleCancel = () => {
    onCancel();
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Actualizar</button>
      <button type="button" onClick={handleCancel}>Cancelar</button>
    </form>
  );
}
 
export default TodoEdit;