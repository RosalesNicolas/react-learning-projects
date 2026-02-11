import { act, render, renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';

vi.mock('../actions/get-gifs-by-query.action', () => ({
  getGifsByQuery: vi.fn(),
}));


describe('useGifs', () => {
    
    // const { result } = renderHook( () => useGifs() );
    beforeEach(() => {
        vi.clearAllMocks();
    });
    
    test('should return default values and methods', () => {
        const { result } = renderHook( () => useGifs() );
        expect(result.current.gifs).toEqual([]);
        expect(result.current.handleSearch).toBeInstanceOf(Function);
        expect(result.current.handleSearch).toBeDefined();
        expect(result.current.handleTermClicked).toBeDefined();
        expect(result.current.previousTerms).toEqual([]);
        
    });

    test('should return a list of gifs', async () => {
        
        const mockGifs = Array.from({ length: 10 }, (_, i) => ({
            id: String(i + 1),
            title: "Goku",
            url: "https://goku.com/gif",
            width: 500,
            height: 800,
        }));
        
        vi.mocked(getGifsByQuery).mockResolvedValue(mockGifs);
        
        const { result } = renderHook( () => useGifs() );
        
        await act(async () => {
            await result.current.handleSearch(" Goku ");
        });

        await waitFor(() => {
            expect(result.current.gifs).toHaveLength(10);
        });
        
    });
       
    test('should return an empty list of gifs and not call API', async () => {
        const { result } = renderHook( () => useGifs() );

        await act(async () => {
            await result.current.handleSearch("");
            await result.current.handleSearch(" ");
        });
        expect(getGifsByQuery).not.toHaveBeenCalled();
        expect(result.current.previousTerms).toHaveLength(0);
        expect(result.current.gifs).toHaveLength(0);
    });

    test('should return an empty list of gifs and not call API if the term is repeated', async () => {
        const { result } = renderHook( () => useGifs() );
        await act(async () => {
            await result.current.handleSearch("Goku");
        });
        await waitFor(() => {
            expect(result.current.previousTerms).toHaveLength(1);
            expect(result.current.previousTerms[0]).toBe("goku");
        });
        await act(async () => {
            await result.current.handleSearch("Goku");
        });
        expect(getGifsByQuery).toHaveBeenCalledTimes(1);
        expect(result.current.previousTerms).toHaveLength(1);
        expect(result.current.previousTerms[0]).toBe('goku');
    });

    test('should hold only 8 previous searches', async () => {
        const { result } = renderHook( () => useGifs() );
        const searchTerms = ["Goku", "One Piece", 
            "Dragon Ball", "Bleach", "Attack on Titan", 
            "My Hero Academia", "Demon Slayer", "Jujutsu Kaisen", "Naruto"];
        for (const term of searchTerms) {
            await act(async () => {
                await result.current.handleSearch(term);
            });
        }
        await waitFor(() => {
            expect(result.current.previousTerms).toHaveLength(8);
            expect(result.current.previousTerms[0]).toEqual('naruto');
        });
    });

    test('should update gifs when a previous term is clicked', async () => {
        const { result } = renderHook( () => useGifs() );   
        await act(async () => {
            await result.current.handleSearch("Goku");
        });
        
        expect(getGifsByQuery).toHaveBeenCalledTimes(1);
        expect(getGifsByQuery).toHaveBeenCalledWith("goku");

        await waitFor(() => {
            expect(result.current.gifs).toHaveLength(10);
        });

        await act(async () => {
            await result.current.handleTermClicked("goku");
        });

        await waitFor(() => {
            expect(result.current.gifs).toHaveLength(10);
        }); 
        expect(getGifsByQuery).toHaveBeenCalledTimes(1);


    });



});