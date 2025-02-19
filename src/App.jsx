import { useState } from "react";
import "./App.css";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        My Course List
      </h1>
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
