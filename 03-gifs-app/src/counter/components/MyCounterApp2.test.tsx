import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

// import { useCounter } from "./hooks/useCounter";

const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();



vi.mock('./hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 20,
        handleAdd: handleAddMock,
        handleSubtract: handleSubtractMock,
        handleReset: handleResetMock,
    })
}));

describe('MyCounterApp', () =>{
    test('should render the component', () => {
        render(<MyCounterApp/>);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain('counter: 20');
        expect(screen.getByRole('button', {name: '-1'})).toBeDefined();
        expect(screen.getByRole('button', {name: 'Reset'})).toBeDefined();
        expect(screen.getByRole('button', {name: '+1'})).toBeDefined();
    });

    test('should call handleAdd if button is clicked', () => {
        render(<MyCounterApp/>);
        const button = screen.getByRole('button', {name: '+1'});
        fireEvent.click(button);
        expect(handleAddMock).toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();
        expect(handleSubtractMock).not.toHaveBeenCalled();
    });

    test('should call handleSubtract if button is clicked', () => {
        render(<MyCounterApp/>);
        const button = screen.getByRole('button', {name: '-1'});
        fireEvent.click(button);
        expect(handleSubtractMock).toHaveBeenCalled();
    });

    test('should call handleReset if button is clicked', () => {
        render(<MyCounterApp/>);
        const button = screen.getByRole('button', {name: 'Reset'});
        fireEvent.click(button);
        expect(handleResetMock).toHaveBeenCalled();
    });

});