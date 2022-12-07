// register models, set up associations between tables, and generate barrel file for the models;

const Task  = require('./tasks');
const Employee  = require('./employees');

Task.belongsTo(Employee);
Employee.hasMany(Task);

module.exports = {
  Task,
  Employee
};