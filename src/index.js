class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};

class Employee extends Person {
    department;
    constructor(name, department) {
        super(name);
        this.department = department;
    }
};

new Employee('li', 'ctrip');

