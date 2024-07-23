import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Counter</Link> 
        </li>
        <li>
          <Link to="/movie-search">Movie Search</Link>
        </li>
        <li>
          <Link to="/todo-list">To-Do List</Link> 
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
