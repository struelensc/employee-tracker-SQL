class Employee {
  constructor(firstName, lastName, role, manager) {
    this.name = `${firstName} ${lastName}`;
    this.role = role;
    this.manager = manager;
  }

  writeToDatabase() {
    // query to insert new employee
  }

  updateDatabase() {
    // query to update an employee
  }
}

module.exports = Employee;
