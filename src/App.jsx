// import { useState, useEffect } from "react";
// import Welcome from "./welcome.jsx";
// import Todo from "./Todo.jsx";

// function App() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");


//   useEffect(() => {
//     console.log("Name Changed:", name);
//   }, [name]);

//   return (
//     <div>
//       <h1>My React Project</h1>

//       <Welcome name="Niku" />

//       <hr />

//       <h2>Counter App</h2>
//       <h3>Count: {count}</h3>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <button onClick={() => setCount(count - 0 ? count -1 : 0)}>
//         Decrease
//       </button>

//       <hr />

//       <h2>Name Input App</h2>

//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <h3>{name ? `Hello, ${name}!` : "Please Enter your name."}</h3>
//       <button onClick={() => setName("")}>Clear Name</button>
//       <hr />
//       <Todo />
//     </div>
//   );
// }

// export default App;





import Todo from "./Todo.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Todo />
    </div>
  );
}

export default App;