import React from 'react';
import '../sass/header.scss';

function Home() {
    return (
        <main class="main">
            <h1>Welcome to our ticket service!</h1>
            <p>Here you can buy and book tickets for concerts, events, and more.</p>
            <div class="block-links">
                <div class="block-link">
                    <a href="/signup">
                        <h2>Sign up</h2>
                        <p>Register your account</p>
                    </a>
                </div>
                {/* <div class="block-link">
                    <a href="/users">
                        <h2>Users</h2>
                        <p>View all registered users</p>
                    </a>
                </div> */}
            </div>
        </main>

    );
}

export default Home;
