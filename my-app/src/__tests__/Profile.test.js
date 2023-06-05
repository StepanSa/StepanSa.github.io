import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Profile from '../Pages/profile';

// test('renders Profile without errors', () => {
//     jest.spyOn(window, 'alert').mockImplementation(() => { });

//     render(
//         <Profile />
//     );

//     const eventCardsElement = screen.queryByText('My Profile');
//     expect(eventCardsElement).toBeInTheDocument();
// });

test('renders profile header with correct text', () => {
    render(
        <Profile />
    );
    const headerElement = screen.getByTestId('profile');
    expect(headerElement).toBeInTheDocument();
});

// describe('Profile component', () => {
//     const accountData = {
//         username: 'john_doe',
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'john@example.com',
//         phone: '1234567890',
//         birthDate: '1990-01-01',
//     };

//     beforeEach(() => {
//         render(
//             <Profile accountData={accountData} />
//         );
//     });

//     test('renders profile header with correct text', () => {
//         const headerElement = screen.getByRole('heading', { level: 1 });
//         expect(headerElement).toHaveTextContent('My Profile');
//     });

    //   test('renders username', () => {
    //     const usernameElement = screen.getByLabelText('Username:');
    //     expect(usernameElement).toHaveTextContent(accountData.username);
    //   });

    //   test('renders first name', () => {
    //     const firstNameElement = screen.getByLabelText('First Name:');
    //     expect(firstNameElement).toHaveTextContent(accountData.firstName);
    //   });

    //   test('renders last name', () => {
    //     const lastNameElement = screen.getByLabelText('Last Name:');
    //     expect(lastNameElement).toHaveTextContent(accountData.lastName);
    //   });

    //   test('renders email', () => {
    //     const emailElement = screen.getByLabelText('Email:');
    //     expect(emailElement).toHaveTextContent(accountData.email);
    //   });

    //   test('renders phone', () => {
    //     const phoneElement = screen.getByLabelText('Phone:');
    //     expect(phoneElement).toHaveTextContent(accountData.phone);
    //   });

    //   test('renders birth date', () => {
    //     const birthDateElement = screen.getByLabelText('Birth Date:');
    //     expect(birthDateElement).toHaveTextContent(accountData.birthDate);
    //   });

    //   test('calls handleLogOut when "Log Out" button is clicked', () => {
    //     const handleLogOutMock = jest.fn();
    //     const logOutButton = screen.getByText('Log Out');
    //     fireEvent.click(logOutButton);
    //     expect(handleLogOutMock).toHaveBeenCalled();
    //   });

    //   test('calls handleDelete when "Delete" button is clicked', () => {
    //     const handleDeleteMock = jest.fn();
    //     const deleteButton = screen.getByText('Delete');
    //     fireEvent.click(deleteButton);
    //     expect(handleDeleteMock).toHaveBeenCalled();
    //   });

    //   test('renders link to "My Tickets" page', () => {
    //     const linkElement = screen.getByRole('link', { name: 'My tickets' });
    //     expect(linkElement).toHaveAttribute('href', '/mytickets');
    //   });
// });
