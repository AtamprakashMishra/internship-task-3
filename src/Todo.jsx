import { useState, useEffect } from "react";
import "./todo.css";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved tasks when the component opens
  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem("myTasks");
      const savedCompleted = localStorage.getItem("myCompletedTasks");

      if (savedTasks) {
        const parsedTasks = JSON.parse(savedTasks);

        if (Array.isArray(parsedTasks)) {
          setTasks(parsedTasks);
        }
      }

      if (savedCompleted) {
        const parsedCompleted = JSON.parse(savedCompleted);

        if (Array.isArray(parsedCompleted)) {
          setCompletedTasks(parsedCompleted);
        }
      }
    } catch (error) {
      console.error("Could not load saved tasks:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save tasks and completed status when they change
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("myTasks", JSON.stringify(tasks));
    localStorage.setItem(
      "myCompletedTasks",
      JSON.stringify(completedTasks)
    );
  }, [tasks, completedTasks, isLoaded]);

  function addTask() {
    if (task.trim() === "") return;

    setTasks((prev) => [...prev, task.trim()]);
    setTask("");
  }

  function deleteTask(indexToDelete) {
    setTasks((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );

    setCompletedTasks((prev) =>
      prev
        .filter((index) => index !== indexToDelete)
        .map((index) =>
          index > indexToDelete ? index - 1 : index
        )
    );
  }

  function toggleTask(index) {
    setCompletedTasks((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  }

  return (
    <div className="todo-container">
      <h2>My To-Do List</h2>

      <input
        type="text"
        className="todo-input"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTask();
        }}
      />

      <button className="todo-add-btn" onClick={addTask}>Add Task</button>

      <ul className="todo-list">
        {tasks.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={completedTasks.includes(index)}
              onChange={() => toggleTask(index)}
            />

            <span
            className="todo-task-text"
              style={{
                textDecoration: completedTasks.includes(index)
                  ? "line-through"
                  : "none",
              }}
            >
              {item}
            </span>

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;