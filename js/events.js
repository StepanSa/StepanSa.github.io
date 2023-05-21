function fetchTickets() {
    const token = localStorage.getItem('token');
    const url = "http://localhost:5000/ticket/inventory/free";
    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
        .then(response => response.json())
        .then(data => {
            const eventsContainer = document.querySelector(".event-cards");
            const eventContainer = document.createElement('div');
            eventContainer.className = "event-card";

            const eventInfo = document.createElement('div');
            eventInfo.className = 'event-info';

            const header = document.createElement('h2');
            header.className = 'event-title';
            header.textContent = data[0].name;

            const price = document.createElement('p');
            price.className = 'event-description';
            price.textContent = 'Price: ' + data[0].price;

            const eventButtons = document.createElement('div');
            eventButtons.className = 'event-buttons';
            const button1 = document.createElement('a');
            button1.className = 'event-button';
            button1.textContent = 'Buy Tickets';
            button1.setAttribute('href', 'tickets/ticket1.html')
            const button2 = document.createElement('a');
            button2.className = 'event-button';
            button2.textContent = 'Book Tickets';
            button2.setAttribute('href', 'tickets/ticket1.html')

            eventsContainer.appendChild(eventContainer);
            eventContainer.appendChild(eventInfo);
            eventInfo.appendChild(header);
            eventInfo.appendChild(price);
            eventInfo.appendChild(eventButtons);
            eventButtons.appendChild(button1);
            eventButtons.appendChild(button2);
        })
        .catch(error => alert(error));
}

window.addEventListener('load', fetchTickets);
