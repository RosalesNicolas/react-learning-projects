import { describe, test, expect, vi, afterEach } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from '@testing-library/react';
// import { ItemCounter } from "./shopping-cart/ItemCounter";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockItemCounter = vi.fn( (_props: unknown) => {
     return <div data-testid='ItemCounter' />;    
});

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));


// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) => (
//         // <div data-testid='ItemCounter' 
//         // name={props.name}
//         // quantity={props.quantity}
//         // />
//     )

    
// }));





describe('FirstStepsApp', () => {

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();
    });

    test('should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />);

        const itemCounter = screen.getAllByTestId('ItemCounter');
        expect(itemCounter.length).toBe(3);
        
        
        // expect(itemCounterElements.length).toBe(3);


        screen.debug()
    });

    test('should call ItemCounter with correct props', () => {
        render(<FirstStepsApp />);


        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Nintendo Switch', quantity: 1 });
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Pro Controller', quantity: 2 });
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Smash Bros 3', quantity: 8 });  
    });
});
