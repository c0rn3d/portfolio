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


function updateGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning!";
    } else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    document.querySelector('#greeting h2').textContent = greeting;
}

updateGreeting(); // Initial call

const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The best time to plant a tree was 20 years ago. The second best time is now."
];

function updateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').textContent = quote;
}

// Add an element in your HTML to display the quote
// <section id="quote-section"><p id="quote"></p></section>
updateQuote(); // Initial call
