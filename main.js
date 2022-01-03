const bookItems = document.getElementById('book__items');
const book = document.getElementById('book__container');
const singleBook = document.createElement('div');
singleBook.classList.add('book');
const formOne = document.getElementById('form__one');
const inputBookTitle = document.getElementById('input__title');
const inputAuthor = document.getElementById('input__author');

// Array of Objects
const bookCollection = localStorage.getItem('bookCollection')
  ? JSON.parse(localStorage.getItem('bookCollection'))
  : [];

// Use array.push({})

// REMOVE BOOK ####
function removeBook(b) {
  // Each Book item
  const bookCollectionItem = Array.from(
    // eslint-disable-next-line comma-dangle
    document.getElementsByClassName('book')
  );

  Object.keys(bookCollectionItem).forEach((k) => {
    if (b === k) {
      bookCollectionItem[k].remove();
      bookCollection.splice(k, 1);
      localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
    }
  });
}

// Render the list of books
function render() {
  book.innerHTML = '';

  bookCollection.forEach((currentBook) => {
    singleBook.innerHTML = `<p id="book__title">${currentBook.title}</p>
    <p id="book__aurthor">${currentBook.author}</p>
    <button type="button" class="remove__button">Remove</button>
    <hr />`;
    book.appendChild(singleBook.cloneNode(true));
    bookItems.appendChild(book);
  });

  // Define the remove button after Creation
  const removeButton = Array.from(
    // eslint-disable-next-line comma-dangle
    document.getElementsByClassName('remove__button')
  );
  Object.keys(removeButton).forEach((removeKey) => {
    removeButton[removeKey].addEventListener('click', () => {
      removeBook(removeKey);
    });
  }, false);
}

// To Render the saved file on the Page
render();

// ADD BOOK FUNCTION ####
function addBook(e) {
  // Save user input to Array Object
  e.preventDefault();
  bookCollection.push({
    title: inputBookTitle.value,
    author: inputAuthor.value,
  });

  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  render();
  // Refactoring
  inputBookTitle.value = '';
  inputAuthor.value = '';
}

// ADD EVENTLISTNER
formOne.addEventListener('submit', addBook);
