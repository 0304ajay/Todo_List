// This component handles adding and editing tasks
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ addTask, editTask, taskToEdit }) => {
  // State for the task title and description
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  // Effect to populate the form with the current task's details if editing
  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit.task);  // Set the task title from taskToEdit
      setDescription(taskToEdit.description);  // Set the description from taskToEdit
    } else {
      setTask('');  // Clear the task title if not editing
      setDescription('');  // Clear the description if not editing
    }
  }, [taskToEdit]);  // Run this effect whenever taskToEdit changes

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior
    if (!task || !description) return;  // Validate input

    if (taskToEdit) {
      // If editing, call editTask with the updated task details
      editTask(taskToEdit.id, task, description);
    } else {
      // If adding, call addTask with a new task object
      addTask({ id: uuidv4(), task, description, completed: false, timestamp: new Date() });
    }
    // Clear the form fields after submission
    setTask('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task"  // Placeholder text for the task input field
        value={task}  // Bind input value to the task state
        onChange={(e) => setTask(e.target.value)}  // Update task state on input change
      />
      <textarea
        placeholder="Description"  // Placeholder text for the description textarea
        value={description}  // Bind textarea value to the description state
        onChange={(e) => setDescription(e.target.value)}  // Update description state on input change
      ></textarea>
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>  {/* Button text changes based on whether editing */}
    </form>
  );
};

export default TodoForm;
