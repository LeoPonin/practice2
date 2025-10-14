// Lesson 3 - Events Starter

let quotes = []

// Select DOM elements
const quoteList = document.getElementById('quote-list');
const form = document.getElementById('quoteForm');
const contentInput = document.getElementById('content');
const authorInput = document.getElementById('author');
const idInput = document.getElementById('quoteId');
const randomBtn = document.getElementById('randomBtn');
const randomDisplay = document.getElementById('randomQuoteDisplay');

import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js';

function createQuoteElement(quote) {
  const div = document.createElement('div');
  div.setAttribute('data-id', quote.id);

  const pContent = document.createElement('p');
  pContent.textContent = quote.content;
  div.appendChild(pContent);

  const pAuthor = document.createElement('p');
  pAuthor.textContent = quote.author;
  div.appendChild(pAuthor);

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.setAttribute('data-id', quote.id);
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => {
    contentInput.value = quote.content;
    authorInput.value = quote.author;
    idInput.value = quote.id;
  });
  div.appendChild(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.setAttribute('data-id', quote.id);
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    deleteQuote(quote.id);
    renderQuotes();
  });
  div.appendChild(deleteBtn);

  return div;
}

function addQuoteToDOM(quote) {
  const el = createQuoteElement(quote);
  quoteList.appendChild(el);
}

function updateQuoteInDOM(quote) {
  const el = quoteList.querySelector(`div[data-id='${quote.id}']`);
  if (el) {
    el.children[0].textContent = quote.content;
    el.children[1].textContent = quote.author;
  }
}

function deleteQuoteFromDOM(id) {
  const el = quoteList.querySelector(`div[data-id='${id}']`);
  if (el) {
    quoteList.removeChild(el);
  }
}

function renderQuotes() {
  quoteList.innerHTML = '';
  const allQuotes = getAllQuotes();
  allQuotes.forEach(addQuoteToDOM);
}

function showRandomQuote() {
  const allQuotes = getAllQuotes();
  if (allQuotes.length === 0) {
    randomDisplay.textContent = '-- No quotes to show --';
    return;
  }
  const idx = Math.floor(Math.random() * allQuotes.length);
  const quote = allQuotes[idx];
  randomDisplay.textContent = `${quote.content} — ${quote.author}`;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const content = contentInput.value.trim();
  const author = authorInput.value.trim();
  const id = idInput.value;
  if (content && author) {
    if (id) {
      updateQuote(Number(id), content, author);
    } else {
      addQuote(content, author);
    }
    form.reset();
    idInput.value = '';
    renderQuotes();
  }
});

randomBtn.addEventListener('click', showRandomQuote);


renderQuotes();
