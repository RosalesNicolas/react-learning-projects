
const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [ , p2, atr] = characterNames;
console.log(  p2 , atr);

const funcionRetorno = () => {
    return [ 'ABC', 123 ] as const;
}

const [ letters, numbers ] = funcionRetorno();
console.log( letters, numbers );


const useState = (value: string) => {
    return [ value, (str: string) => `${str}` ] as const;
    }

const [ name, setName ] = useState('Goku');
console.log( name );
console.log( setName('Vegeta') );    
