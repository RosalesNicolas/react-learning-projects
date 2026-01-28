import { describe, expect, test } from 'vitest';
import { MyAwesomeApp } from './MyAwesomeApp';
import { render, screen } from '@testing-library/react';


describe('MyAwesomeApp', () => {

    test('Should render first name and last name', () => {
        render(<MyAwesomeApp />);
        
        const { container } = render(<MyAwesomeApp />);
        // console.log(container);
        // console.log(document.body.innerHTML);
        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('Nicolas');
        expect(h3?.innerHTML).toContain('Rosales');

    })

    test('Should render first name and last name - screen', () => {
        render(<MyAwesomeApp />);
        screen.debug();
    
        const h1 = screen.getAllByRole('heading')[0];
        expect(h1.innerHTML).toContain('Nicolas');
    });

    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    });


});