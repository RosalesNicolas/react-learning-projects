import { describe, test, expect, vi } from "vitest";
import {  fireEvent, render, screen, waitFor } from "@testing-library/react";
import { SearchBar } from "./SearchBar";


describe('SearchBar', () => {

    const placeHolder = 'Test placeholder';
    const buttonName = 'Test button';
    // const testValue = 'Test value';

    test('should render searchbar correctly', () => {
        const { container } = render(<SearchBar onQuery={() => {}}/>)

        expect(container).toMatchSnapshot();
        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();

    });

    test('should render the input with the placeholder', () => {
        render(<SearchBar placeholder={placeHolder} onQuery={() => {}} />);
        // screen.debug();
        const inputElement = screen.getByPlaceholderText(placeHolder);
        expect(inputElement).toBeDefined();
    });
    test('should render without placeholder and use default', () => {
        const { container } = render(<SearchBar onQuery={() => {}} />);
        const inputElement = container.querySelector('input');
        expect(inputElement?.getAttribute('placeholder')).toBe('Buscar');
    });
    test('should render the button name when given', () => {
        const { container } = render(<SearchBar buttonName={buttonName} onQuery={() => {}} />);
        const buttonElement = container.querySelector('button');
        expect(buttonElement?.innerHTML).toBe(buttonName);
    });
    test('should render the button name when in not given and use default value', () => {
        const { container } = render(<SearchBar onQuery={() => {}} />);
        const inputElement = container.querySelector('button');
        expect(inputElement?.innerHTML).toBe('Buscar');
    });
    test('should call onQuery when typing', async () => {
        // const { container } = render(<SearchBar onQuery={(testValue:string) => {}} />);
        // const inputElement = container.querySelector('input');
        // const inputElement?.value = testValue;
        // expect(inputElement?.getAttribute('value')).toBe(testValue);
    });
    test('should call onQuery with correct value after 700ms', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'test'}});

        // await new Promise((resolve) => setTimeout(resolve, 701));

        await waitFor(() => {
            expect(onQuery).toHaveBeenCalled();
            expect(onQuery).toHaveBeenCalledWith('test');
        });
    });

    test('should call only once with the last value(debounce)', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 't'}});
        fireEvent.change(input, {target: {value: 'te'}});
        fireEvent.change(input, {target: {value: 'tes'}});
        fireEvent.change(input, {target: {value: 'test'}});
        
        await waitFor(() => {
            expect(onQuery).toHaveBeenCalledTimes(1);
            expect(onQuery).toHaveBeenCalledWith('test');
        });
    });

    test('should call OnQuery when button clicked with the input value', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'test'}});

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onQuery).toHaveBeenCalledTimes(1);
        expect(onQuery).toHaveBeenCalledWith('test');
    });

    test('should the input has the correct pplaceholder value', () => {
        const value = 'buscar gif';

        render(<SearchBar placeholder={value} onQuery={() => {}} />);
        expect(screen.getByPlaceholderText(value)).toBeDefined();
    });

});