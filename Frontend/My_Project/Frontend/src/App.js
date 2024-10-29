import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [students, setstudents] = useState([]);
  const [newstudents, setnewstudents] = useState({
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    grade: "",
    address: "",
    contact_number: "",
  });
  const [selectedstudent, setSelectedstudent] = useState();
  const [toview, settoview] = useState({
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    grade: "",
    address: "",
    contact_number: "",
  });
  const [openview, setopenview] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios
      .get("http://10.0.4.84:8000/api/students/")
      .then((response) => {
        console.log(response.data);
        setstudents(response.data);
      })
      .catch((error) => console.error(error));
  };
  const handleInputChange = (e) => {
    setnewstudents({ ...newstudents, [e.target.name]: e.target.value });
    console.log(newstudents);
  };

  const handleAddStudents = () => {
    axios
      .post("http://10.0.4.84:8000/api/students/", newstudents)
      .then((response) => {
        setnewstudents([...students, response.data]);
        setnewstudents({
          first_name: "",
          last_name: "",
          age: "",
          gender: "",
          grade: "",
          address: "",
          contact_number: "",
        });
      })
      .catch((error) => console.error(error));
  };
  const handleViewClick = async (id) => {
    const response = await axios.get(
      `http://10.0.4.84:8000/api/students/${id}`
    );
    settoview(response.data);
    setopenview(true);
  };
  const handleEditClick = (student) => {
    setSelectedstudent(student.id);
    setnewstudents({
      first_name: student.first_name,
      last_name: student.last_name,
      age: student.age,
      gender: student.gender,
      grade: student.grade,
      address: student.address,
      contact_number: student.contact_number,
    });
  };

  const handleUpdateStudent = () => {
    if (!selectedstudent) {
      console.error("No student selected for update");
      return; // Ensure there's a selected student
    }

    console.log("Updating student with ID:", selectedstudent);
    console.log("New student data:", newstudents);

    axios
      .put(
        `http://10.0.4.84:8000/api/students/${selectedstudent}`,
        newstudents
      )
      .then((response) => {
        console.log("Student updated successfully:", response.data);
        fetchStudents(); // Refresh the student list
        setnewstudents({
          first_name: "",
          last_name: "",
          age: "",
          gender: "",
          grade: "",
          address: "",
          contact_number: "",
        });
        setSelectedstudent(null); // Reset selected student after update
      })
      .catch((error) => console.error("Error updating student:", error));
  };

  const handleCancelStudent = () => {
    setSelectedstudent(null);
    setnewstudents({
      first_name: "",
      last_name: "",
      age: "",
      gender: "",
      grade: "",
      address: "",
      contact_number: "",
    });
  };
  const handleDeleteStudent = (id) => {
    axios
      .delete(`http://10.0.4.84:8000/api/students/${id}`, newstudents)
      .then((response) => {
        fetchStudents();
        setnewstudents({
          first_name: "",
          last_name: "",
          age: "",
          gender: "",
          grade: "",
          address: "",
          contact_number: "",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="app-container">
      <h1>Student Management System</h1>
      <div className="form-container">
        <div className="form-inputs">
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            value={newstudents.first_name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            value={newstudents.last_name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="age"
            placeholder=" age"
            value={newstudents.age}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="gender"
            placeholder=" gender"
            value={newstudents.gender}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="grade"
            placeholder="grade"
            value={newstudents.grade}
            onChange={handleInputChange}
          />
          <textarea
            name="address"
            placeholder="Address"
            value={newstudents.address}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="contact_number"
            placeholder=" number"
            value={newstudents.contact_number}
            onChange={handleInputChange}
          />

          <div className="form-buttons">
            {selectedstudent ? (
              <>
                <button onClick={handleUpdateStudent}>Update</button>
                <button onClick={handleCancelStudent}>Cancel</button>
              </>
            ) : (
              <button onClick={handleAddStudents}>Add New Students</button>
            )}
          </div>
        </div>
      </div>
      <ul className="student-list">
        {Array.isArray(students) &&
          students.map((student) => (
            <li key={student.id}>
              <div>
                <strong>
                  {student.first_name} {student.last_name}
                </strong>
              </div>
              <div className="actions">
                <button
                  className="view"
                  onClick={() => handleViewClick(student.id)}
                >
                  View
                </button>
                <button
                  className="edit"
                  onClick={() => handleEditClick(student)}
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDeleteStudent(student.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>

      {/* //view data */}
      {openview && (
        <div className="outer_box">
          <>
            <strong>
              {toview.first_name} {toview.last_name}
            </strong>
            <br />
            <span>Age:{toview.age}</span>
            <br />
            <span>Gender:{toview.gender}</span>
            <br />
            <span>Grade:{toview.grade}</span>
            <br />
            <span>Address:{toview.address}</span>
            <br />
            <span>Age:{toview.age}</span>
            <br />
            <span>Contact Number:{toview.contact_number}</span>
            <button onClick={() => setopenview(false)}> Close</button>
          </>
        </div>
      )}
    </div>
  );
};

export default App;
