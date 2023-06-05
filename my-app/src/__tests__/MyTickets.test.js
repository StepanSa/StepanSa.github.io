import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import MyTicketsPage from '../Pages/mytickets';

test('renders Login page without errors', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => { });

    render(
        <MyTicketsPage />
    );

    const eventCardsElement = screen.getByTestId('mytickets');
    expect(eventCardsElement).toBeInTheDocument();
});
