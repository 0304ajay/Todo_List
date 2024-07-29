import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);
  
  // State to hold the task that is currently being edited
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

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to edit an existing task
  const editTask = (id, newTask, newDescription) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, task: newTask, description: newDescription, timestamp: new Date(), completed: task.completed } : task
    );
    setTasks(updatedTasks);
    setTaskToEdit(null); // Clear the task being edited
  };

  // Function to mark a task as done or undone
  const markAsDone = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <Router>
      <div className="App">
        <h1>Todo List</h1>
        {/* Render the TodoForm component for adding and editing tasks */}
        <TodoForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
        
        {/* Set up routing for the TodoList component */}
        <Routes>
          <Route path="/" element={<TodoList tasks={tasks} markAsDone={markAsDone} deleteTask={deleteTask} setTaskToEdit={setTaskToEdit} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
