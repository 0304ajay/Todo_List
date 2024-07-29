// This component represents each task item in the Todo list
import React, { useState } from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

const TodoItem = ({ task, markAsDone, deleteTask, setTaskToEdit }) => {
  // State to manage whether the task details are expanded or not
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div className="todo-summary">
        <span>{task.task}</span>  {/* Display the task title */}
        <button onClick={() => markAsDone(task.id)}><FaCheck /></button>  {/* Button to mark the task as done/undone */}
        <button onClick={() => setTaskToEdit(task)}><FaEdit /></button>  {/* Button to edit the task */}
        <button onClick={() => deleteTask(task.id)}><FaTrash /></button>  {/* Button to delete the task */}
        <button onClick={() => setExpanded(!expanded)}>Details</button>  {/* Button to toggle task details */}
      </div>
      {/* Conditionally render the task details if expanded is true */}
      {expanded && (
        <div className="todo-details">
          <p>{task.description}</p>  {/* Display the task description */}
          <p>{new Date(task.timestamp).toLocaleString()}</p>  {/* Display the timestamp in a readable format */}
        </div>
      )}
    </div>
  );
};

export default TodoItem;
