const Employee = require('../models/Employee');

// Get all employees
exports.getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.status(200).json(employees);
};

// Get employee by ID
exports.getEmployeeById = async (req, res) => {
  const employee = await Employee.findById(req.params.eid);
  if (!employee) return res.status(404).json({ message: 'Employee not found' });
  res.status(200).json(employee);
};

// Create new employee
exports.createEmployee = async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.status(201).json(employee);
};

// Update employee details
exports.updateEmployee = async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(req.params.eid, req.body, { new: true });
  res.status(200).json(employee);
};

// Delete employee
exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.query.eid);
  res.status(204).send();
};
