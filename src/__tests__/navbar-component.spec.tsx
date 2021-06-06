import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Github Button', () => {
    //deve renderizar o button
    it('should render the button', () => {
        render(<Navbar />);
        const button = screen.getByText(/View on Github/i);
        expect(button).toBeInTheDocument();
    });

    // deve conter o link correto do projeto github
    it('should have correct url to Github project page', () => {
        render(<Navbar />);
        const anchor = screen.getByRole('link');
        expect(anchor).toHaveAttribute('href', 'https://github.com/adrhardtke/datavisualizer')
    });
})

describe('Header', () => {
    // deve conter o nome do projeto no cabeçalho
    it('should have correct project name on header', () => {
        render(<Navbar />);
        const projectName = screen.getByText(/DataVisualizer/i);
        expect(projectName).toBeInTheDocument();
    });
})


