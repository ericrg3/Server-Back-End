/*==================================================
/database/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  
  imageUrl: {
  type: Sequelize.STRING,
  defaultValue: "https://www.bestcollegesonline.org/wp-content/uploads/2015/01/florida-state-university-online-graduation-rates.jpg" 
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT,
  }
});

// Export the campus model
module.exports = Campus;