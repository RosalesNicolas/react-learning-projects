
import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch', quantity: 1 },
    { productName: 'Pro Controller', quantity: 2 },
    { productName: 'Smash Bros 3', quantity: 8 },
]

export function FirstStepsApp() {
    return (
        <> 
            <h1>Carrito de compras!!</h1>
            {
                itemsInCart.map( ({productName, quantity} ) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity}/>
                ))
            }
            {/* <ItemCounter name='Item 1' quantity={1}/>
            <ItemCounter name='Item 2' quantity={2}/>
            <ItemCounter name='Item 3' quantity={8}/> */}            
        </>
    );
}

