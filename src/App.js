import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoEdit from './components/TodoEdit'; // Cambio en la importación
import './App.css';
 
function App() {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Nuevo estado para rastrear el índice de la tarea en edición
  const [editText, setEditText] = useState(''); // Nuevo estado para el texto de la tarea en edición
 
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);
 
  const handleAddTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };
 
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };
 
  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setEditText(todos[index]);
  };
 
  const handleUpdateTodo = (updatedText) => {
    const newTodos = [...todos];
    newTodos[editingIndex] = updatedText;
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setEditingIndex(null);
  };
 
  const handleCancelEdit = () => {
    setEditingIndex(null);
  };
 
  return (
    <div>
      <Header />
      <TodoForm onAdd={handleAddTodo} />
      {editingIndex !== null ? (
        <TodoEdit // Cambio en el nombre del componente
          todo={editText}
          onUpdate={handleUpdateTodo}
          onCancel={handleCancelEdit}
        />
      ) : (
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onEdit={handleEditTodo} // Pasar la función de edición a TodoList
        />
      )}
    </div>
  );
}
 
export default App;


