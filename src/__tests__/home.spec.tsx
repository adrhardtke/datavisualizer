import { render, screen, cleanup } from '@testing-library/react';
import React from 'react'
import Home from '../pages/Home'


describe('Navbar', () => {
    afterEach(cleanup)

    it('should render the navbar component', () => {
        render(<Home />);
        const navbar = screen.getByLabelText(/navbar/i);
        expect(navbar).toBeInTheDocument();
    });
})

describe('Tabs', () => {
    afterEach(cleanup)

    it('should render the tabs component', () => {
        render(<Home />);
        const tabs = screen.getByRole(/tabpanel/i);
        expect(tabs).toBeInTheDocument();
    });
})