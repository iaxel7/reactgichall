import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/todo.css'; // importing custom styles

function TodoList({ tasks, setTasks }) {
  // setting up state to hold the current input value for a new task
  const [task, setTask] = useState('');

  // function to add a new task to the list
  const addTask = () => {
    // adding the new task to the existing list of tasks
    setTasks([...tasks, { text: task, id: Date.now() }]);
    // clearing the input field after adding the task
    setTask('');
  };

  // function to delete a task from the list
  const deleteTask = (id) => {
    // filtering out the task that needs to be deleted based on its id
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-list">
      <h1>to-do list</h1>
      {/* input field to add a new task */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // update the 'task' state with the input value
        placeholder="new task"
      />
      {/* button to add the new task to the list */}
      <button onClick={addTask}>add task</button>
      <ul>
        {/* loop through each task in the list and display it */}
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            {/* button to delete the task */}
            <button onClick={() => deleteTask(task.id)}>delete</button>
            {/* link to navigate to the edit page for the task */}
            <Link to={`/task/${task.id}`}>edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

