import { heroes, type Hero, Owner } from "../data/heroes.data"




const getHeroeById = ( id: number ): Hero => {

    const hero = heroes.find( (hero) =>{
        return hero.id === id
    } );

    if ( !hero ) {
        throw new Error(`No existe un héroe con el id ${ id }`)
    }

    return hero;

}


// console.log( getHeroeById(5));

const getHeroByOwner = (owner: Owner) => {

    const heroByOwner = heroes.filter( (hero) => {
        return hero.owner === owner
    })
    return heroByOwner;
}
console.log( getHeroByOwner(Owner.Marvel));
