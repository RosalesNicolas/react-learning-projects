import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { ItemCounter } from "./ItemCounter";


describe('ItemCounter', () => {
    test('should render with default values', () => {
        const name = 'Test item';
        render(<ItemCounter name={name} />);
        
        expect(screen.getByText(name)).toBeDefined();
    });

    test('should render with custom quantity', () => {
        const name = 'Test item';
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity} />);

        expect( screen.getByText(quantity)).toBeDefined();
    });

    test('should increase count when +1 button is pressed', () => {
        render(<ItemCounter name="Test item" quantity={1} />);

        const [buttonAdd] = screen.getAllByRole('button');
        
        fireEvent.click(buttonAdd);
        expect(screen.getByText('2')).toBeDefined();
    });

    test('should decrease count when -1 button is pressed', () => {
        render(<ItemCounter name="Test item" quantity={3} />);
        const [,buttonSubstract] = screen.getAllByRole('button');
        fireEvent.click(buttonSubstract);
        expect(screen.getByText('2')).toBeDefined();
    });

    test('should not decrease count below 1', () => {
        render(<ItemCounter name='Item test' quantity={1} />);
        const [,buttonSubtract] = screen.getAllByRole('button');
        fireEvent.click(buttonSubtract);
        expect(screen.getByText('1')).toBeDefined();
    });

    test('should have red text when count is 1', () => {
        const quantity = 1;
        const name = 'Item test';
        render(<ItemCounter name={name} quantity={quantity} />);

        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('red');
    });

    test('should turn to black when counter is more than 1', () => {
        const quantity = 5;
        const name = 'Item test';
        render(<ItemCounter name={name} quantity={quantity} />);

        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('black');
    })

});