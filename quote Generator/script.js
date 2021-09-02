let apiQuotes = [];

// Show new Quotes
function newQuote(){
    // generating a random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get Quotes From API with an async function using a try catch statement
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
//        console.log(apiQuotes[12]);
        newQuote();
    } catch (error) {
     // Catch Error Here
    }
}

// On Load
getQuotes();