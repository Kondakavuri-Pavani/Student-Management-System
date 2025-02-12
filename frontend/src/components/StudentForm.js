import React, { useState } from "react";
import { addStudent } from "../api";

const StudentForm = ({ onStudentAdded }) => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
    department: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStudent(student);
      alert("Student added successfully!");
      setStudent({ name: "", email: "", age: "", department: "" });
      onStudentAdded(); // Refresh student list
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={student.email} onChange={handleChange} required />
      <input type="number" name="age" placeholder="Age" value={student.age} onChange={handleChange} required />
      <input type="text" name="department" placeholder="Department" value={student.department} onChange={handleChange} required />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
