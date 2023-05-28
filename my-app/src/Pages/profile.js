import React, { Component } from 'react';
import '../sass/profile.scss';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountData: {},
            modal: false
        };
    }

    componentDidMount() {
        this.handleGetMyInfo();
    }

    handleGetMyInfo = async () => {
        const token = localStorage.getItem('token');
        console.log(token);
        const url = 'http://127.0.0.1:5000/user/self';
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
        };

        try {
            const response = await axios.get(
                url,
                config
            );
            this.setState({ accountData: response.data });
        } catch (error) {
            console.log(error);
        }
    };

    handleLogOut = event => {
        event.preventDefault();
        sessionStorage.removeItem('Authorization');
        localStorage.removeItem('Authorization');
        localStorage.removeItem('token');
        //this.props.history.push('/');
    }

    handleDelete = async event => {
        event.preventDefault();
        this.setState({ modal: !this.state.modal });
        const token = localStorage.getItem('token');
        const url = 'http://127.0.0.1:5000/user/self';
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
        };

        try {
            const response = await axios.delete(url, config);
            sessionStorage.removeItem('Authorization');
            localStorage.removeItem('Authorization');
            localStorage.removeItem('token');
            //this.props.history.push('/');
            alert('Your account was successfully deleted');
        } catch (error) {
            console.log(error);
        }
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    render() {
        const { accountData } = this.state;

        return (
            <div class="container">
                <header>
                    <h1>My Profile</h1>
                </header>
                <main>
                    <div class="profile-container">
                        <div class="profile-item">
                            <label>Username:</label>
                            <p>{accountData.username}</p>
                        </div>
                        <div class="profile-item">
                            <label>First Name:</label>
                            <p>{accountData.firstName}</p>
                        </div>
                        <div class="profile-item">
                            <label>Last Name:</label>
                            <p>{accountData.lastName}</p>
                        </div>
                        <div class="profile-item">
                            <label>Email:</label>
                            <p>{accountData.email}</p>
                        </div>
                        <div class="profile-item">
                            <label>Phone:</label>
                            <p>{accountData.phone}</p>
                        </div>
                        <div class="profile-item">
                            <label>Birth Date:</label>
                            <p>{accountData.birthDate}</p>
                        </div>
                        <div class="button-container">
                            <button class="update-button">Update</button>
                            <button class="update-button" onClick={this.handleLogOut}>Log Out</button>
                            <button class="delete-button" onClick={this.handleDelete}>Delete</button>
                        </div>
                        <div class="profile-item">
                            <p><Link to="/mytickets">My tickets</Link></p>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Profile;
