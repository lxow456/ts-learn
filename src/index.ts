let passcode = 'xx';

class Employee {
    private _fullName: string = '';

    get fullName(): string {
        return this._fullName;
    }
};

let e = new Employee();
e.fullName;
