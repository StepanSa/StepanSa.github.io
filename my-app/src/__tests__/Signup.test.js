import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from '../Pages/signup';

test('renders Login page without errors', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => { });

    render(
        <SignUp />
    );

    const eventCardsElement = screen.getByTestId('user-dialog');
    expect(eventCardsElement).toBeInTheDocument();
});
