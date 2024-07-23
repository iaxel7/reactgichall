import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import MovieSearch from './components/MovieSearch';
import TodoList from './components/ToDoList';
import TaskDetail from './components/TaskDetail';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Counter />} /> 
          <Route path="/movie-search" element={<MovieSearch />} />
          <Route path="/todo-list" element={<TodoList tasks={tasks} setTasks={setTasks} />} /> 
          <Route path="/task/:id" element={<TaskDetail tasks={tasks} setTasks={setTasks} />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
