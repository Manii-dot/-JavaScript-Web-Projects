let apiQuotes = [];

// Get Quotes From API with an async function using a try catch statement
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
    } catch (error) {
     // Catch Error Here
    }
}

// On Load
getQuotes();