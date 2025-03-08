import React, { useState } from 'react';
import { createTodo } from '../services/todoService';

interface TodoFormProps {
  onTodoCreate: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onTodoCreate }) => {
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await createTodo({ title });
      setTitle('');
      onTodoCreate();
    } catch (error) {
      console.error('Error creating todo:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ 
      marginBottom: '20px',
      display: 'flex',
      gap: '10px'
    }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo..."
        disabled={isSubmitting}
        style={{ 
          flex: 1,
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button 
        type="submit" 
        disabled={isSubmitting || !title.trim()}
        style={{ 
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: isSubmitting || !title.trim() ? 'not-allowed' : 'pointer',
          opacity: isSubmitting || !title.trim() ? 0.7 : 1
        }}
      >
        {isSubmitting ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  );
};

export default TodoForm;
