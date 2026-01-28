import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";


describe('CustomHeader', () => {

    const title = 'Test title';
    const description = 'Test description';
    test('shopuld render the title correctly', () => {
        render(<CustomHeader title={title} />);
        expect(screen.getByText(title)).toBeDefined();
    });

    test('should render the description when provided', () => {
        render(<CustomHeader title={title} description={description} />);
        screen.debug();
        // expect(screen.getByText(description)).toBeDefined();
        // expect(screen.getByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML).toBe(description);
    });

    test('should not render the description when not provided', () => {
        const { container } = render(<CustomHeader title={title} />);
 
        const divElement = container.querySelector('.content-center');
        const h1 = divElement?.querySelector('h1');
        expect(h1?.innerHTML).toBe(title); 

        const p = divElement?.querySelector('p');
        expect(p).toBeNull();
    });
});


// describe('CustomHeader', () => {

//     test('shopuld render the title correctly', () => {
//         render(<CustomHeader title="Buscador de Gifs" />);
//         const h1 = screen.getByRole("heading", { level: 1 });
//         expect(h1.textContent).toBe("Buscador de Gifs");
//     });

//     test('should render the description when provided', () => {
//         render(<CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto"/>);
//         const p = screen.getByText("Descubre y comparte el Gif perfecto");
//         expect(p.tagName).toBe("P");
//     });

//     test('should not render the description when not provided', () => {
//         render(<CustomHeader title="Buscador de Gifs" />);
//         const p = screen.queryByText("Descubre y comparte el Gif perfecto");
//         expect(p).toBeNull();
//     });
// });