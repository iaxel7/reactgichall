import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/taskdetail.css'; // importing custom styles

function TaskDetail({ tasks, setTasks }) {
  // get the task id from url params
  const { id } = useParams();
  // hook to return a navigate function to programmatically navigate
  const navigate = useNavigate();

  // setting up state to hold the text of the task being edited
  const [task, setTask] = useState('');

  // useEffect hook to fetch the task data when the component mounts or the id changes
  useEffect(() => {
    // find the current task based on the id from the url
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
      <h1>edit task</h1>
      {/* input field to edit the task */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // update the 'task' state with the input value
      />
      <button onClick={saveTask}>save</button>
    </div>
  );
}

export default TaskDetail;

