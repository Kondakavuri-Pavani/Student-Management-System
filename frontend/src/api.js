import axios from "axios";

const API_URL = "http://localhost:5000/students";  // Backend URL

// Get all students
export const getStudents = async () => {
  return await axios.get(`${API_BASE_URL}/api/students`);
};

// Add a new student
export const addStudent = async (studentData) => {
  return await axios.post(`${API_BASE_URL}/api/students`, studentData);
};

// Delete a student
export const deleteStudent = async (studentId) => {
  return await axios.delete(`${API_BASE_URL}/api/students/${studentId}`);
};
