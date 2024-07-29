import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (id, newTask, newDescription) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, task: newTask, description: newDescription, timestamp: new Date(), completed: task.completed } : task
    );
    setTasks(updatedTasks);
    setTaskToEdit(null);
  };

  const markAsDone = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <Router>
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
        <Routes>
          <Route path="/" element={<TodoList tasks={tasks} markAsDone={markAsDone} deleteTask={deleteTask} setTaskToEdit={setTaskToEdit} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
