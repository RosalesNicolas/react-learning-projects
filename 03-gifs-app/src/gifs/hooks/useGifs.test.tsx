import { act, render, renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';

vi.mock('../actions/get-gifs-by-query.action', () => ({
  getGifsByQuery: vi.fn(),
}));


describe('useGifs', () => {
    const { result } = renderHook( () => useGifs() );
    
    
    test('should return default values and methods', () => {
        
        expect(result.current.gifs).toEqual([]);
        expect(result.current.handleSearch).toBeInstanceOf(Function);
        expect(result.current.handleSearch).toBeDefined();
        expect(result.current.handleTermClicked).toBeDefined();
        expect(result.current.previousTerms).toEqual([]);
        
    });

    test('should return a list of gifs', () => {
        
        const mockGifs = Array.from({ length: 10 }, (_, i) => ({
            id: String(i + 1),
            title: "Goku",
            url: "https://goku.com/gif",
            width: 500,
            height: 800,
        }));
        
        vi.mocked(getGifsByQuery).mockResolvedValue(mockGifs);
        
        const { result } = renderHook( () => useGifs() );
        
        act(async () => {
            await result.current.handleSearch("");
        });

        waitFor(() => {
            expect(result.current.gifs).toHaveLength(10);
            console.log(result.current.gifs);
        }
    )});


});