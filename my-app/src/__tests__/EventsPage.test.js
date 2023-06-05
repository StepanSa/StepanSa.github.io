import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import EventsPage from '../Pages/events';


test('renders EventsPage without errors', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => { });

    render(
        <EventsPage />
    );

    const eventCardsElement = screen.getByTestId('event-cards');
    expect(eventCardsElement).toBeInTheDocument();
});
