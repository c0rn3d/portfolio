// JavaScript code can go here if needed

// Function to update date and time
function updateDateTime() {
	const now = new Date();

	// Adjust the time by +2 hours (7200000 milliseconds)
   // const adjustedTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);

    const dateString = now.toDateString();  // Example: "Sun Sep 09 2024"
    const timeString = now.toLocaleTimeString();  // Example: "12:34:56 PM"
    document.getElementById('date-time').textContent = `Today is ${dateString} and the time is ${timeString}`;
}

// Initial call to display date and time
updateDateTime();

// Update date and time every second
setInterval(updateDateTime, 1000)
