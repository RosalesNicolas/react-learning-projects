
const myPromise = new Promise<number>( (resolve, reject) => {

    setTimeout( () => {
        // resolve(100);
        reject(`Mi amigo se perdió y no me trajo el dinero`);
    }, 2000);

} )

myPromise
.then((myMoney) => {

    console.log(`Tengo ${myMoney} dólares`);
})
.catch( reason => {
    console.warn(reason)
})
.finally( () => {
    console.log(`Pues a seguir con mi vida`);
})