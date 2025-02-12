import React, { useEffect, useState } from "react";
import { getStudents } from "../api";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents()
      .then(response => setStudents(response.data))
      .catch(error => console.error("Error fetching students:", error));
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>{student.name} - {student.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
