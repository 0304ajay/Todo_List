//This component will handle the list of tasks and the search functionality.
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TodoItem from './TodoItem';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const TodoList = ({ tasks, markAsDone, deleteTask, setTaskToEdit }) => {
  const navigate = useNavigate();
  const query = useQuery();
  const initialSearch = query.get('search') || '';
  const [search, setSearch] = useState(initialSearch);

  useEffect(() => {
    if (search) {
      navigate(`/?search=${search}`);
    } else {
      navigate('/');
    }
  }, [search, navigate]);

  const filteredTasks = tasks.filter(task =>
    task.task.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="todo-list">
      <input
        type="text"
        placeholder="Search tasks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredTasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          markAsDone={markAsDone}
          deleteTask={deleteTask}
          setTaskToEdit={setTaskToEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;

