import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";




describe('useCounter', () => {
    const { result } = renderHook( () => useCounter() );
    const initialValue = 20;

    test('shoul inicialize with defalt value of 10', () => {
        // const { result } = renderHook( () => useCounter() );
        expect(result.current.counter).toBe(10);
    });
    test('shoul inicialize with value of 20', () => {
        const { result } = renderHook( () => useCounter(initialValue) );
        expect(result.current.counter).toBe(initialValue);
    });


    test('should increment counter when handleAdd is called', () => {
        const { result } = renderHook( () => useCounter() );
        act( () =>{
            result.current.handleAdd();
        })
        expect(result.current.counter).toBe(11);
    });

    test('should decrement counter when handleSubtract is called', () => {
        const { result } = renderHook( () => useCounter() );    
        act( () =>{
            result.current.handleSubtract();
        })
        expect(result.current.counter).toBe(9);
    });

    test('should not decrement counter below 0 when handleSubtract is called', () => {
        const { result } = renderHook( () => useCounter(0) );    
        act( () =>{
            result.current.handleSubtract();
        })
        expect(result.current.counter).toBe(0);
    });
    test('should reset counter to initial value when handleReset is called.2', () => {
        const { result } = renderHook( () => useCounter(initialValue) );  
        act( () =>{
            result.current.handleAdd();
            result.current.handleReset();
        })
        expect(result.current.counter).toBe(initialValue);
    });
});