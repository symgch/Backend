const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstname: "Shuhei",
		lastname: "Yamaguchi",
		department: "Computer Science",
		employeeId: "1"
	});
	const dummyEmployee2 = await Employee.create({
		firstname: "John",
		lastname: "Smith"
	});

	const dummyTask = await Task.create({
		title: "Finish Assignment 3",
        due: "12/8 11:59 PM",
		description: "Get through most of the porject by this date"
	});

	await dummyTask.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;