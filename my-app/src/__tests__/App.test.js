import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import React, { Component } from 'react';
import App from '../App';

test('renders header', () => {
    render(
        <App />
    );

    const headerElement = screen.getByText('Ticvice');
    expect(headerElement).toBeInTheDocument();
});

test('renders home page', () => {
    render(
        <App />
    );

    const homeElement = screen.queryByText('Welcome to our ticket service!');
    expect(homeElement).toBeInTheDocument();
});

test('renders login page', () => {
    render(
        <App />
    );

    // Add your assertions for the Login component
    const loginElement = screen.getByText('Login');
    expect(loginElement).toBeInTheDocument();
});

