import React from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onTodoUpdate: () => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onTodoUpdate }) => {
  if (todos.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '20px', 
        color: '#6c757d',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px',
        marginTop: '20px'
      }}>
        No todos yet. Add one above!
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onTodoUpdate={onTodoUpdate} 
        />
      ))}
    </div>
  );
};

export default TodoList;
