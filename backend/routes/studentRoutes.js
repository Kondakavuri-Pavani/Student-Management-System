const express = require("express");
const Student = require("../models/Student");
const router = express.Router();

// ✅ Add a new student
router.post("/add", async (req, res) => {
    try {
        const { name, email, age, course } = req.body;
        const newStudent = new Student({ name, email, age, course });
        await newStudent.save();
        res.status(201).json({ message: "Student added successfully!", student: newStudent });
    } catch (error) {
        res.status(500).json({ error: "Error adding student" });
    }
});

// ✅ Get all students
router.get("/", async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).send(error);
    }
});

// ✅ Get a single student by ID
router.get("/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving student" });
    }
});

// ✅ Update student details
router.put("/update/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student updated successfully!", student });
    } catch (error) {
        res.status(500).json({ error: "Error updating student" });
    }
});

// ✅ Delete a student
router.delete("/delete/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting student" });
    }
});

module.exports = router;
