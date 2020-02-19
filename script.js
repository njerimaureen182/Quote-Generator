const quotes = [
    {
        name: 'Stephen King',
        quote: 'Get busy living or get busy dying.'
    },

    {
        name:'John F. Kennedy',
        quote:'Those who dare to fail miserably will achieve greatly.'
    },

    {
        name:'Abraham Lincoln',
        quote:'I am successful today because I had a friend who believed in me and I did not have the heart to let him down.'
    },

    {
        name:'Leo Tolstoy',
        quote:'If you want to be happy, be.'

    },

    {
        name:'Leonardo Da Vinci',
        quote:'It has long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'
    }
]

// to target the button
const quoteBtn = document.querySelector('#quoteBtn');

// to target the #quote
const quote = document.querySelector('#quote');

// to target the #quoteAuthor
const quoteAuthor = document.querySelector('#quoteAuthor');

// to add event listeners by targeting the ids above:
quoteBtn.addEventListener('click', displayQuote);

// callback function for the displayQuote function
function displayQuote() {
    let number = Math.floor(Math.random()*quotes.length);
    
    // to display author of quote randomly
    quoteAuthor.innerHTML = quotes[number].name;

    // to display quote randomly
    quote.innerHTML = quotes[number].quote;

}






