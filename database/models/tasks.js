const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define("task", {

  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  due: {
    type: Sequelize.STRING
  },

  description: {
    type: Sequelize.STRING
  },

  // isOpen: {
  //   type: Sequelize.BOOLEAN,
  //   allowNull: false,
  //   defaultValue: true
  // }

});

module.exports = Task;