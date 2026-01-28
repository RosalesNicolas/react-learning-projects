const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};

// const { name, age, key } = person;

// const name = person.name;
// const age = person.age;
// const key = person.key;

// console.log(name, age, key)


interface Hero {
    name: string,
    age: number,
    key: string,
    rank?: string,
}


const useContext = ( {key, name, age, rank}: Hero) => {

    return {
        keyName: key,
        user: {
            name: name,
            age: age,
        },
        rank: rank
    }
}

const context = useContext(person);
console.log(context);

const { rank } = context;
console.log(rank);

const { user: { name } } = context;
console.log(name);