import React from 'react';
import { fireEvent, render, screen, waitForElement } from '@testing-library/react';
import Tabs from '../components/Tabs';
import { StateMock } from '@react-mock/state'

describe('Tabs', () => {

    const renderComponent = ({ value }: any) =>
        render(
            <StateMock state={{ value }}>
                <Tabs />
            </StateMock>
        );

    it('should open table page when click in table tab', async () => {
        renderComponent({value: 0});
        const tableTab = screen.getByLabelText(/Tabelas/i);
        
        await fireEvent.click(tableTab)

        const tablePage = screen.getByLabelText(/table-page/i);
        
        expect(tablePage).toBeInTheDocument()
    });

    it('should open graphic page when click in graphic tab', async () => {
        renderComponent({value: 0});
        const graphicTab = screen.getByLabelText(/graficos/i);
        
        await fireEvent.click(graphicTab)

        const graphicPage = screen.getByLabelText(/graphic-page/i);
        
        expect(graphicPage).toBeInTheDocument()
    });
});