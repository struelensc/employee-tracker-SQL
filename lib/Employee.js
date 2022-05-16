const db = require("../config/connection");

class Employee {
  constructor(firstName, lastName, role, manager) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.manager = manager;
  }

  writeToDatabase() {
    const params = [this.firstName, this.lastName, this.role, this.manager];

    // query to insert new employee
    db.query(
      `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
      params,
      (err, result) => {
        err
          ? console.log(err)
          : console.log(
              `Added ${this.firstName} ${this.lastName} to the database`
            );
      }
    );
  }

  updateDatabase() {
    // query to update an employee
  }
}

module.exports = Employee;
