import React from 'react';
import '../sass/signup.scss';

function SignUp() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     // Retrieve the JWT from the client-side storage
    //     const token = localStorage.getItem('token');

    //     // Check if the user is logged in
    //     const isLoggedIn = token !== null;
    //     setIsLoggedIn(isLoggedIn);
    // }, []);

    return (
        <body>
            <div class="user-dialog">
                <h1>Sign up</h1>
                <form id="create-user-form">
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
                    <div class="form-group">
                        <label for="isAdmin">Role</label>
                        <select id="isAdmin" name="isAdmin" required>
                            <option value="">--Select Role--</option>
                            <option value="0">regular</option>
                            <option value="1">admin</option>
                        </select>
                    </div>
                    <div class="buttons">
                        <button type="submit" class="btn btn-ok" id="create-user-button">Ok</button>
                        <a href="/" class="btn-cancel">Cancel</a>
                    </div>
                </form>
            </div>
        </body>
    );
}

export default SignUp;

// import React from 'react';
// import '../sass/signup.scss';

// function SignUp() {
//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         const isAdmin = event.target.elements.isAdmin.value;

//         if (isAdmin === '1') {
//             alert('You do not have rights to create an admin.');
//         } else {
//             // Proceed with form submission to the backend
//             // Implement your form submission logic here
//         }
//     };

//     return (
//         <body>
//             <div className="user-dialog">
//                 <h1>Sign up</h1>
//                 <form id="create-user-form" onSubmit={handleFormSubmit}>
//                     <div class="form-group">
//                         <label for="username">Username:</label>
//                         <input type="text" id="username" name="username" pattern="[a-zA-Z0-9]+" minlength="3" maxlength="20"
//                             placeholder="Enter your username" required />
//                     </div>
//                     <div class="form-group">
//                         <label for="password">Password:</label>
//                         <input type="password" id="password" name="password" pattern=".{6,}" title="Six or more characters"
//                             placeholder="Enter your password" required />
//                     </div>
//                     <div class="form-group">
//                         <label for="confirmPassword">Confirm Password:</label>
//                         <input type="password" id="confirmPassword" name="confirmPassword" pattern=".{6,}"
//                             title="Six or more characters" placeholder="Confirm your password" required />
//                     </div>
//                     <div class="form-group">
//                         <label for="firstName">First Name</label>
//                         <input type="text" id="firstName" name="firstName" placeholder="Enter your name" required />
//                     </div>
//                     <div class="form-group">
//                         <label for="lastName">Last Name</label>
//                         <input type="text" id="lastName" name="lastName" placeholder="Enter your surname" required />
//                     </div>
//                     <div class="form-group">
//                         <label for="email">Email:</label>
//                         <input type="email" id="email" name="email" placeholder="Enter your email" required />
//                     </div>
//                     <div class="form-group">
//                         <label for="phone">Phone number</label>
//                         <input type="tel" id="phone" name="phone" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[\s0-9]{4,20}$"
//                             placeholder="Enter your phone number" />
//                     </div>
//                     <div class="form-group">
//                         <label for="birthDate">Birth date</label>
//                         <input type="date" id="birthDate" name="birthDate" value="2004-02-27" min="1910-01-01" max="2023-12-31" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="isAdmin">Role</label>
//                         <select id="isAdmin" name="isAdmin" required>
//                             <option value="">--Select Role--</option>
//                             <option value="0">regular</option>
//                             <option value="1">admin</option>
//                         </select>
//                     </div>
//                     <div className="buttons">
//                         <button type="submit" className="btn btn-ok" id="create-user-button">
//                             Ok
//                         </button>
//                         <a href="/" className="btn-cancel">
//                             Cancel
//                         </a>
//                     </div>
//                 </form>
//             </div>
//         </body>
//     );
// }

// export default SignUp;
