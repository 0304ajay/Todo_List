//This component will represent each task item.
import React, { useState } from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

const TodoItem = ({ task, markAsDone, deleteTask, setTaskToEdit }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div className="todo-summary">
        <span>{task.task}</span>
        <button onClick={() => markAsDone(task.id)}><FaCheck /></button>
        <button onClick={() => setTaskToEdit(task)}><FaEdit /></button>
        <button onClick={() => deleteTask(task.id)}><FaTrash /></button>
        <button onClick={() => setExpanded(!expanded)}>Details</button>
      </div>
      {expanded && (
        <div className="todo-details">
          <p>{task.description}</p>
          <p>{new Date(task.timestamp).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default TodoItem;

