const db = require("../config/connection");

class Department {
  constructor(name) {
    this.name = name;
  }

  async writeToDatabase() {
    // query to insert new department
    try {
      await db
        .promise()
        .query(
          `INSERT INTO departments (department_name) VALUES (?)`,
          this.name
        );
      console.log(`Added ${this.name} to the database`);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Department;
