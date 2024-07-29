// This component handles the list of tasks and the search functionality
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TodoItem from './TodoItem';

// Custom hook to get query parameters from the URL
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const TodoList = ({ tasks, markAsDone, deleteTask, setTaskToEdit }) => {
  const navigate = useNavigate();  // Hook to programmatically navigate
  const query = useQuery();  // Use the custom hook to get query parameters
  const initialSearch = query.get('search') || '';  // Get the initial search term from URL parameters
  const [search, setSearch] = useState(initialSearch);  // State to hold the current search term

  // Effect to update the URL search parameter whenever the search term changes
  useEffect(() => {
    if (search) {
      navigate(`/?search=${search}`);  // Navigate with the search query
    } else {
      navigate('/');  // Navigate to root if search is empty
    }
  }, [search, navigate]);  // Dependencies: search and navigate

  // Filter tasks based on the current search term
  const filteredTasks = tasks.filter(task =>
    task.task.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="todo-list">
      <input
        type="text"
        placeholder="Search tasks"  // Placeholder text for the search input
        value={search}  // Bind input value to the search state
        onChange={(e) => setSearch(e.target.value)}  // Update search state on input change
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
