import React, { useState, useEffect } from 'react';
import { Todo } from './types';
import { getTodos } from './services/todoService';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const data = await getTodos();
      setTodos(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching todos:', error);
      setError('Failed to fetch todos. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="app" style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px'
    }}>
      <header style={{ 
        textAlign: 'center', 
        marginBottom: '30px'
      }}>
        <h1 style={{ color: '#343a40' }}>Todo App</h1>
        <p style={{ color: '#6c757d' }}>Manage your tasks efficiently</p>
      </header>

      <main>
        <TodoForm onTodoCreate={fetchTodos} />
        
        {loading ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>Loading todos...</div>
        ) : error ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '20px', 
            color: '#dc3545',
            backgroundColor: '#f8d7da',
            borderRadius: '4px'
          }}>
            {error}
          </div>
        ) : (
          <TodoList todos={todos} onTodoUpdate={fetchTodos} />
        )}
      </main>
    </div>
  );
};

export default App;
