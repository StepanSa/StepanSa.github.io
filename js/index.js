function checkJWT() {
    // Retrieve the JWT from the client-side storage
    const token = localStorage.getItem('token');

    // If the JWT is not present, the user is not logged in
    if (!token) {
        console.log('User is not logged in');
        return false;
        // Add code to redirect the user to the login page
    }

    // Check if the JWT is still valid
    const expirationDate = new Date(JSON.parse(atob(token.split('.')[1])).exp * 1000);
    if (expirationDate < new Date()) {
        console.log('User session has expired');
        localStorage.removeItem('token');
        return false;
        // Add code to redirect the user to the login page
    }

    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    // Get the login and profile link elements
    const loginLink = document.getElementById('login-link');
    const profileLink = document.getElementById('profile-link');

    // Check if the user is logged in
    const isLoggedIn = checkJWT();

    // If the user is logged in, hide the login link and show the profile link
    if (isLoggedIn) {
        loginLink.style.display = 'none';
        profileLink.style.display = 'block';
    } else {
        // Otherwise, show the login link and hide the profile link
        loginLink.style.display = 'block';
        profileLink.style.display = 'none';
    }

    // Add event listener to the logout link
    const logoutLink = document.getElementById('logout-link');
    logoutLink.addEventListener('click', (event) => {
        event.preventDefault();
        // Add code to log out the user and redirect to the login page
    });
});