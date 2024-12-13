import React, { useState } from 'react';

const BookingForm = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !date || !time || !guests) {
            setMessage('Please fill in all fields.');
            return;
        }
        setMessage(`Thank you, ${name}! Your table for ${guests} guests has been booked for ${date} at ${time}.`);
    };

    return (
        <div className="container">
            <h1>Book a Table</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

                <label>Time:</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

                <label>Number of Guests:</label>
                <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" required />

                <button type="submit">Book Now</button>
            </form>
            {message && <div id="message">{message}</div>}
        </div>
    );
};

export default BookingForm;