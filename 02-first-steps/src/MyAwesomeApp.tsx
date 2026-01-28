import type { CSSProperties } from "react";

const firstName = 'Nicolas';
const lastName = 'Rosales';

const favoriteGames = ['Élder Ring', 'God of War', 'Halo'];
const isActive = true;

const address = {
    barrio: 'Alto Alberdi',
    ciudad: 'Córdoba',
}
const myStyle: CSSProperties = {
                backgroundColor: 'orange',
                color: 'blue',
                padding: isActive ? 10 : 20,
                borderRadius: 10,
                marginTop: 40,};

export function MyAwesomeApp() {
    return (
        <div>  
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{9*8}</p>
            <p className="mi-clase-favorita">{favoriteGames.join(', ')}</p>
           

            <h1>{isActive ? 'Activo' : 'No activo' } </h1>
 
            <p
            style = {myStyle}
            >{ JSON.stringify(address) }</p>
        </ div>
    );
}