import { describe, test, expect } from "vitest";
import {  render, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";


describe('SearchBar', () => {

    const placeHolder = 'Test placeholder';
    const buttonName = 'Test button';
    // const testValue = 'Test value';

    test('should render the input with the placeholder', () => {
        render(<SearchBar placeholder={placeHolder} onQuery={() => {}} />);
        screen.debug();
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



});