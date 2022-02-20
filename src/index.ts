class Animal {
    name: string;
};

class Dog extends Animal {
    breed: string;
};

interface Okay {
    // [x: number]: Dog;
    // [y: string]: Animal;
    [x: number]: string;
    [y: string]: string | null | number;
}