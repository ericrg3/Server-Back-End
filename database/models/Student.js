/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize,STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "https://us.123rf.com/450wm/yupiramos/yupiramos1804/yupiramos180408171/99263812-hand-drawn-man-student-avatar-character-vector-illustration-design.jpg?ver=6" 
    },

  gpa: {
    type: Sequelize,FLOAT,
    allowNull: false,
    min: 0,
    max: 4
  },
});

// Export the student model
module.exports = Student;