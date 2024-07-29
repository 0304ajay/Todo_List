# Todo List Application

## Overview

This is a simple and modern Todo List application built with React. The application allows users to manage tasks with features such as adding, editing, marking tasks as done, deleting tasks, and searching through tasks. The tasks are displayed in an expandable list format, showing a description and a timestamp of the last update when expanded.

## System Design

### Features
- **Create Task:** Users can add new tasks with a title and description.
- **Update Task:** Users can edit existing tasks.
- **Mark as Done:** Users can toggle the completion status of tasks.
- **Delete Task:** Users can remove tasks from the list.
- **Search Tasks:** Users can filter tasks based on the search term, with the search term managed through URL parameters.
- **Expandable List:** Tasks can be expanded to show additional details like description and timestamp.

### Technology Stack
- **Frontend:** React.js
- **Routing:** `react-router-dom`
- **Styling:** CSS for a modern and responsive design
- **State Management:** React state and effects
- **Data Storage:** Local storage to persist tasks between sessions

## Implementation

### File Structure
- **`src/`**: Contains the source code for the application
  - **`components/`**: Contains React components for the application
    - `TodoItem.js`: Component to display individual tasks with expandable details
    - `TodoList.js`: Component to list all tasks with search functionality
    - `TodoForm.js`: Component to add and edit tasks
  - **`App.js`**: Main component that includes routing and state management
  - **`App.css`**: CSS file for styling the application

### Key Components
- **`App.js`:**
  - Manages global state and routing
  - Handles adding, editing, marking as done, and deleting tasks

- **`TodoList.js`:**
  - Displays a list of tasks
  - Integrates search functionality using URL parameters

- **`TodoItem.js`:**
  - Displays individual tasks with expandable details

- **`TodoForm.js`:**
  - Form for adding and editing tasks

### URL Parameters
- **Search Functionality:** Uses URL parameters to manage the search term, allowing users to filter tasks and see the current search term in the URL.

## Setup and Running the Application

### Prerequisites
- Node.js and npm installed on your machine

### Steps to Set Up
1. **Clone the Repository:**
   ```sh
   git clone <repository-url>
   cd <repository-folder>
