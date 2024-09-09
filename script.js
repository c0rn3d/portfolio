// JavaScript code can go here if needed

// Function to update date and time
function updateDateTime() {
    const now = new Date();
    const dateString = now.toDateString();  // Example: "Sun Sep 09 2024"
    const timeString = now.toLocaleTimeString();  // Example: "12:34:56 PM"
    document.getElementById('date-time').textContent = `Today is ${dateString} and the time is ${timeString}`;
}

// Initial call to display date and time
updateDateTime();
