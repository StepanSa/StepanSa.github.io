import React, { useEffect, useState } from 'react';
import '../sass/header.scss';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Retrieve the JWT from the client-side storage
        const token = localStorage.getItem('token');

        // Check if the token exists and is not expired
        const isLoggedIn = token !== null && !isTokenExpired(token);
        setIsLoggedIn(isLoggedIn);
    }, []);

    // Function to check if the token is expired
    const isTokenExpired = (token) => {
        const decodedToken = decodeToken(token);
        if (!decodedToken || !decodedToken.exp) {
            return true;
        }

        // Get the expiration timestamp and current timestamp
        const expirationTime = decodedToken.exp * 1000;
        const currentTime = Date.now();

        // Check if the token is expired
        return currentTime > expirationTime;
    };

    // Function to decode the token and get the payload
    // const decodeToken = (token) => {
    //     try {
    //         const base64Url = token.split('.')[1];
    //         const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    //         const jsonPayload = decodeURIComponent(
    //             atob(base64)
    //                 .split('')
    //                 .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
    //                 .join('')
    //         );
    //         return JSON.parse(jsonPayload);
    //     } catch (error) {
    //         return null;
    //     }
    // };

    return (
        <header className="header">
            <div className="logo">Ticvice</div>
            <nav>
                <div className="header-links">
                    <ul className="nav-links">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/gallery">Gallery</a>
                        </li>
                        <li>
                            <a href="/events">Events</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className="nav-login">
                <ul>
                    {!isLoggedIn && (
                        <li id="login-link">
                            <a href="/login">Login</a>
                        </li>
                    )}
                    {isLoggedIn && (
                        <li id="profile-link">
                            <a href="/profile">Profile</a>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
