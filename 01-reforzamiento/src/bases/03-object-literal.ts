interface Person {
    firstName: string;
    lastName: string;
    age: number;
    addres?: Address;
}

interface Address {
    postalCode: number;
    city: string;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 35,
    // addres: {
    //     postalCode: 5003,
    //     city: 'Córdoba'
    // }
}

const spiderman: Person = {
    firstName: "Peter",
    lastName: "Parker",
    age: 22,
    addres: {
        postalCode: 10001,
        city: 'New York'
    }
}
    
console.log(ironman, spiderman);



/* const spiderman = structuredClone(ironman);
spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 21;
spiderman.addres.city = 'New York';


console.log(ironman, spiderman); */