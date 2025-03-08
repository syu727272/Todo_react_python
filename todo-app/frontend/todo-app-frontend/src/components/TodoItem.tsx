import React, { useState } from 'react';
import { Todo } from '../types';
import { toggleTodo, deleteTodo, updateTodo } from '../services/todoService';

interface TodoItemProps {
  todo: Todo;
  onTodoUpdate: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onTodoUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleToggle = async () => {
    try {
      await toggleTodo(todo.id);
      onTodoUpdate();
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(todo.id);
      onTodoUpdate();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await updateTodo(todo.id, { title });
      setIsEditing(false);
      onTodoUpdate();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleCancel = () => {
    setTitle(todo.title);
    setIsEditing(false);
  };

  return (
    <div className="todo-item" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '10px',
      margin: '5px 0',
      backgroundColor: todo.completed ? '#f8f9fa' : 'white',
      borderRadius: '4px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        style={{ marginRight: '10px' }}
      />
      
      {isEditing ? (
        <div style={{ display: 'flex', flex: 1 }}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ 
              flex: 1, 
              padding: '5px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
          <button onClick={handleSave} style={{ marginLeft: '5px' }}>Save</button>
          <button onClick={handleCancel} style={{ marginLeft: '5px' }}>Cancel</button>
        </div>
      ) : (
        <>
          <span style={{ 
            flex: 1,
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? '#6c757d' : 'black'
          }}>
            {todo.title}
          </span>
          <div>
            <button 
              onClick={handleEdit}
              style={{ 
                marginRight: '5px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '5px 10px'
              }}
            >
              Edit
            </button>
            <button 
              onClick={handleDelete}
              style={{ 
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '5px 10px'
              }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
