import React, { useState } from "react";
import useCourseStore from "../app/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");

  console.log("courseform rendered");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Please add course title");

    addCourse({
      id: Math.ceil(Math.random() * 10000),
      title: courseTitle,
      completed: false,
    });

    setCourseTitle("");
  };
  return (
    <div className="form-container">
      <input
        type="text"
        value={courseTitle}
        className="form-input"
        onChange={(e) => setCourseTitle(e.target.value)}
      />

      <button className="form-submit-btn" onClick={handleCourseSubmit}>
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;
