import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../Pages/login';

test('renders Login page without errors', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => { });

    render(
        <Login />
    );

    const eventCardsElement = screen.getByTestId('login-container');
    expect(eventCardsElement).toBeInTheDocument();
});
