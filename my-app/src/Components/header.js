// import React, { useEffect } from 'react';
// import '../sass/header.scss';

// function Header() {
//     useEffect(() => {
//         // Retrieve the JWT from the client-side storage
//         const token = localStorage.getItem('token');

//         // Get the login and profile link elements
//         const loginLink = document.getElementById('login-link');
//         const profileLink = document.getElementById('profile-link');

//         // Check if the user is logged in
//         const isLoggedIn = token !== null;

//         // If the user is logged in, hide the login link and show the profile link
//         if (isLoggedIn) {
//             loginLink.style.display = 'none';
//             profileLink.style.display = 'block';
//         } else {
//             // Otherwise, show the login link and hide the profile link
//             loginLink.style.display = 'block';
//             profileLink.style.display = 'none';
//         }
//     }, []);

//     return (
//         <header className="header">
//             <div className="logo">Ticvice</div>
//             <nav>
//                 <div className="header-links">
//                     <ul className="nav-links">
//                         <li>
//                             <a href="/">Home</a>
//                         </li>
//                         <li>
//                             <a href="/gallery">Gallery</a>
//                         </li>
//                         <li>
//                             <a href="/events">Events</a>
//                         </li>
//                         <li>
//                             <a href="/contact">Contact</a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>

//             <nav className="nav-login">
//                 <ul>
//                     <li id="login-link">
//                         <a href="/login">Login</a>
//                     </li>
//                 </ul>
//             </nav>

//             <nav className="nav-profile" style={{ display: 'none' }}>
//                 <ul>
//                     <li>
//                         <a href="/profile" id="profile-link">
//                             Profile
//                         </a>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Header;

import React, { useEffect, useState } from 'react';
import '../sass/header.scss';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Retrieve the JWT from the client-side storage
        const token = localStorage.getItem('token');

        // Check if the user is logged in
        const isLoggedIn = token !== null;
        setIsLoggedIn(isLoggedIn);
    }, []);

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

