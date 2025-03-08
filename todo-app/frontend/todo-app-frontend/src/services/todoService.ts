import axios from 'axios';
import { Todo, TodoCreate } from '../types';

const API_URL = 'http://localhost:8000';

export const getTodos = async (): Promise<Todo[]> => {
  const response = await axios.get<Todo[]>(`${API_URL}/todos`);
  return response.data;
};

export const getTodo = async (id: number): Promise<Todo> => {
  const response = await axios.get<Todo>(`${API_URL}/todos/${id}`);
  return response.data;
};

export const createTodo = async (todo: TodoCreate): Promise<Todo> => {
  const response = await axios.post<Todo>(`${API_URL}/todos`, todo);
  return response.data;
};

export const updateTodo = async (id: number, todo: TodoCreate): Promise<Todo> => {
  const response = await axios.put<Todo>(`${API_URL}/todos/${id}`, todo);
  return response.data;
};

export const toggleTodo = async (id: number): Promise<Todo> => {
  const response = await axios.put<Todo>(`${API_URL}/todos/${id}/toggle`);
  return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/todos/${id}`);
};
