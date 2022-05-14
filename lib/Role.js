class Role {
  constructor(name, salary, department) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  writeToDatabase() {
    // query to insert new role
  }
}

module.exports = Role;
