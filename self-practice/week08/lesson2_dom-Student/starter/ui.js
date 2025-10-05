import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js'

// Step 1: Create an array to hold quote objects (will be populated from quote.js)
let quotes = []

// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById('quote-list')


// Step 3: Define a function called renderQuotes()
// This function:
// - Clears the quoteList element
// - Gets the current quotes with getAllQuotes()
// - Loops through each quote and creates a <p> element with the format: "content" — author
// - Appends each <p> to quoteList
function renderQuotes() {
	quotes = getAllQuotes()

	quoteList.innerHTML = ''

	quotes.forEach((q) => {
		const p = document.createElement('p')
		p.textContent = `"${q.content}" — ${q.author}`
		quoteList.appendChild(p)
	})
}

// Step 4: Add initial quotes directly using addQuote from quote.js and render
addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
addQuote('Do or do not. There is no try.', 'Yoda')
addQuote('Simplicity is the ultimate sophistication.', 'Leonardo da Vinci')

renderQuotes()
