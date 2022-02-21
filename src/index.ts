let passcode = 'xx';

class Employee {
    private _fullName: string = '';

    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName: string) {
        if (passcode && passcode === 'xxx') {
            this._fullName = newName;
        } else {
            console.log('uncorrect passcode!');
        }
    }
};

let e = new Employee();
e.fullName = 'bob';

console.log(e.fullName);
