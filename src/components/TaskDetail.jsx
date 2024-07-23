import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/taskdetail.css'; 

function TaskDetail({ tasks, setTasks }) {
  // get the task ID from URL params
  const { id } = useParams();
  // hook to return a navigate function to programmatically navigate
  const navigate = useNavigate();

  const [task, setTask] = useState('');


  // useEffect hook to fetch the task data when the component mounts or the ID changes
  useEffect(() => {
    // find the current task based on the ID from the URL
    const currentTask = tasks.find(task => task.id === parseInt(id));
    // if task found, set task text in the state
    if (currentTask) {
      setTask(currentTask.text);
    }
  }, [id, tasks]); // runs the effect when 'id' or 'tasks' changes


  // function to save the edited task
  const saveTask = () => {
    // update the tasks state with the new task text
    setTasks(tasks.map(t => (t.id === parseInt(id) ? { ...t, text: task } : t)));
    // navigate back to the to-do list page
    navigate('/todo-list');
  };

  return (
    <div className="task-detail">
      <h1>Edit Task</h1>
      {/* Input field to edit the task */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // update the 'task' state with the input value
      />
      <button onClick={saveTask}>Save</button>
    </div>
  );
}

export default TaskDetail;
