import React, { Component } from "react";
// import "../sass/login.scss";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            error: "",
        };
    }

    // performLogin = () => {
    //     const { username, password } = this.state;

    //     fetch("http://127.0.0.1:5000/login", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "Basic " + btoa(username + ":" + password),
    //         },
    //     })
    //         .then((res) => {
    //             if (!res.ok) {
    //                 throw new Error("Username or password are incorrect");
    //             }
    //             return res.json();
    //         })
    //         .then((data) => {
    //             localStorage.setItem("token", data.token);
    //             window.location.href = "./";
    //         })
    //         .catch((error) => {
    //             this.setState({ error: error.message });
    //         });
    // };

    // handleInputChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.performLogin();
    // };

    render() {
        // const { username, password, error } = this.state;

        return (
            <div className="container" data-testid="login-container">
                {/* <form onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        required
                        value={username}
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit" id="login-user-button">Login</button>
                    {error && <p className="error">{error}</p>}
                    <p>
                        Not registered? <a href="./signup">Sign up here</a>
                    </p>
                </form> */}
            </div>
        );
    }
}

export default Login;
