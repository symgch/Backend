const express = require('express');
const router = express.Router();
const { Task, Employee } = require('../database/models');

// helper function so we don't need to wrap our
// handler functions in try-catch blocks;
// the async handler will catch any errors and pass
// them to the error-handling middleware (defined in app.js)
const ash = require('express-async-handler');
const e = require('express');

/** GET ALL INSTRUCTORS */
router.get('/', ash(async(req, res) => {
  let employees = await Employee.findAll({include: [Task]});
  res.status(200).json(employees);
}));

/** GET INSTRUCTOR BY ID*/
router.get('/:id', ash(async(req, res) => {
  let employees = await Employee.findByPk(req.params.id, {include: [Task]});
  res.status(200).json(employees);
}));

// Delete instructor
router.delete('/:id', ash(async(req, res) => {
  await Employee.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json("Instructor deleted");
}));

// Add new instructor
router.post('/', ash(async(req, res) => {
  let newEmployee = await Employee.create(req.body);
  res.status(200).json(newEmployee);
}));

// Edit instructor
router.put('/:id', ash(async(req, res) => {
  await Employee.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  let employees = await Employee.findByPk(req.params.id, {include: [Task]});
  res.status(201).json(employees);
}))

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;