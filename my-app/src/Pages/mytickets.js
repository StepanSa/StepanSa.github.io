import React, { Component } from 'react';
import axios from 'axios';
import '../sass/mytickets.scss';

class MyTicketsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketData: [],
            userId: null
        };
    }

    componentDidMount() {
        this.fetchTickets();
    }

    fetchTickets = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://127.0.0.1:5000/user/self', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const userId = response.data.id;
            this.setState({ userId });
            this.fetchUserTickets(userId);
        } catch (error) {
            console.log(error);
        }
    };

    fetchUserTickets = async (userId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://127.0.0.1:5000/transaction/ordersby/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            this.setState({ ticketData: response.data });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const { ticketData } = this.state;

        return (
            <div className="my-tickets">
                <h1 className="my-tickets__title">My Tickets</h1>
                {ticketData.length === 0 ? (
                    <p className="my-tickets__message">No tickets purchased yet.</p>
                ) : (
                    <ul className="my-tickets__list">
                        {ticketData.map((ticket) => (
                            <li key={ticket.id} className="my-tickets__item">
                                <p className="my-tickets__info">Ticket ID: {ticket.ticketId}</p>
                                <p className="my-tickets__info">Status: {ticket.status}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default MyTicketsPage;
