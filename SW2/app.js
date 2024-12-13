document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Simple validation
    if (!name || !date || !time || !guests) {
        document.getElementById('message').innerText = 'Please fill in all fields.';
        return;
    }

    // Display a success message
    document.getElementById('message').innerText = `Thank you, ${name}! Your table for ${guests} guests has been booked for ${date} at ${time}.`;

    // Here you can also send the data to a server or API
});