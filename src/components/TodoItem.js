import React from 'react';
 
function TodoItem({ todo, onDelete, onEdit }) {
  const handleEdit = () => {
    onEdit(); // Llama a la función onEdit pasada como prop
  };
 
  return (
    <li>
      <span>{todo}</span>
      <button onClick={handleEdit}>Editar</button>
      <button onClick={onDelete}>Eliminar</button>
    </li>
  );
}
 
export default TodoItem;
