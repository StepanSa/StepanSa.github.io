import React, { Component, Redirect } from 'react';
import { Link } from 'react-router-dom';
import '../sass/events.scss';


class EventsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketData: [],
            isLoggedIn: false,
            redirectToConfirmation: false,
            selectedTicketId: null
        };
    }

    componentDidMount() {
        const token = localStorage.getItem('token');

        if (!token) {
            alert('Please log in to view tickets.');
            return;
        }

        // Fetch the ticket data from the API endpoint
        fetch('http://127.0.0.1:5000/ticket/inventory/free', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.status === 401) {
                    alert('Please log in to view tickets.');
                    throw new Error('Unauthorized');
                }
                return response.json();
            })
            .then(data => this.setState({ ticketData: data, isLoggedIn: true }))
            .catch(error => console.log(error));
    }

    handleBuyTicket = (event, ticketId) => {
        event.preventDefault();

        const token = localStorage.getItem('token');

        if (!token) {
            alert('Please log in to buy tickets.');
            return;
        }

        const confirmed = window.confirm('Are you sure you want to buy this ticket?');

        if (!confirmed) {
            return;
        }

        // Make an API call to buy the ticket
        fetch('http://127.0.0.1:5000/transaction/order', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ticketId: ticketId, status: 'placed' })
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response or perform any necessary actions
                console.log('Ticket bought:', data);

                // Redirect to the confirmation page with the ticket ID
                this.setState({ redirectToConfirmation: true, selectedTicketId: ticketId });
            })
            .catch(error => console.log(error));
    };

    render() {
        const { ticketData, isLoggedIn, selectedTicketId } = this.state;

        if (!isLoggedIn) {
            return null; // Render nothing if the user is not logged in
        }

        return (
            <div className="event-cards">
                {ticketData.map((ticket) => (
                    <div className="event-card" key={ticket.id}>
                        <div className="event-info">
                            <h2 className="event-title">{ticket.name}</h2>
                            <p className="event-description">Price: {ticket.price}</p>
                            <div className="event-buttons">
                                <button
                                    className="event-button"
                                    onClick={(event) => this.handleBuyTicket(event, ticket.id)}
                                >
                                    Buy Tickets
                                </button>
                                <button
                                    className="event-button"
                                    onClick={(event) => this.handleBuyTicket(event, ticket.id)}
                                >
                                    Book Tickets
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default EventsPage;


