import React, { useState } from 'react';
// import '../sass/signup.scss';

function SignUp() {
    // const [error, setError] = useState(null);

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     const isAdmin = event.target.elements.isAdmin.value;

    //     if (isAdmin === '1') {
    //         alert('You do not have rights to create an admin.');
    //     } else {
    //         const formData = new FormData(event.target);
    //         const data = Object.fromEntries(formData);

    //         if (data.password !== data.confirmPassword) {
    //             setError('Passwords do not match');
    //         } else {
    //             delete data.confirmPassword;

    //             const options = {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify(data),
    //             };

    //             try {
    //                 const response = await fetch('http://127.0.0.1:5000/user', options);
    //                 const json = await response.json();
    //                 if (json.code !== 200) {
    //                     if (json.error.slice(2, 11) === 'birthDate') {
    //                         setError('Birth date should be entered earlier than the current date');
    //                     } else {
    //                         setError(json.error);
    //                     }
    //                 } else {
    //                     alert('User successfully created');
    //                     // Redirect to profile page or perform any other necessary action
    //                 }
    //             } catch (error) {
    //                 setError('An error occurred while creating the user');
    //             }
    //         }
    //     }
    // };

    return (
        <div className="user-dialog" data-testid="user-dialog">
            {/* <h1>Sign up</h1>
            {error && <p className="error-message">{error}</p>}
            <form id="create-user-form" onSubmit={handleFormSubmit}>
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" pattern="[a-zA-Z0-9]+" minlength="3" maxlength="20"
                        placeholder="Enter your username" required />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" pattern=".{6,}" title="Six or more characters"
                        placeholder="Enter your password" required />
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" pattern=".{6,}"
                        title="Six or more characters" placeholder="Confirm your password" required />
                </div>
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Enter your name" required />
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Enter your surname" required />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div class="form-group">
                    <label for="phone">Phone number</label>
                    <input type="tel" id="phone" name="phone" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[\s0-9]{4,20}$"
                        placeholder="Enter your phone number" />
                </div>
                <div class="form-group">
                    <label for="birthDate">Birth date</label>
                    <input type="date" id="birthDate" name="birthDate" value="2004-02-27" min="1910-01-01" max="2023-12-31" />
                </div>
                <div className="form-group">
                    <label htmlFor="isAdmin">Role</label>
                    <select id="isAdmin" name="isAdmin" required>
                        <option value="">--Select Role--</option>
                        <option value="0">regular</option>
                        <option value="1">admin</option>
                    </select>
                </div>
                <div className="buttons">
                    <button type="submit" className="btn btn-ok" id="create-user-button">
                        Ok
                    </button>
                    <a href="/" className="btn-cancel">
                        Cancel
                    </a>
                </div>
            </form> */}
        </div>
    );
}

export default SignUp;

