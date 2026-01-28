
function greet( name: string) {
    return `Hola ${name}`;
}

const greet2 = ( name: string ): string => `Hola ${name}`;


const message = greet( 'Goku' );
const message2 = greet2('Vegeta');
console.log( message, message2 );

interface User {
    uid: string;
    userName: string;
}

function getUser(): User {
    return {
        uid: 'ABC-123',
        userName: 'NicoRosales'
    }
}

const getUser2 = () => ({
    uid: 'NOT-456',
    userName: 'Ironman'
    });



const user = getUser();
const user2 = getUser2();
console.log(user, user2);