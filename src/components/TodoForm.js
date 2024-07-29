//This component will handle adding and editing tasks.
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ addTask, editTask, taskToEdit }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit.task);
      setDescription(taskToEdit.description);
    } else {
      setTask('');
      setDescription('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !description) return;

    if (taskToEdit) {
      editTask(taskToEdit.id, task, description);
    } else {
      addTask({ id: uuidv4(), task, description, completed: false, timestamp: new Date() });
    }
    setTask('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TodoForm;
