const bookItems = document.getElementById('book__items');
const book = document.getElementById('book__container');
const singleBook = document.createElement('div');
singleBook.classList.add('book');
const formOne = document.getElementById('form__one');
<<<<<<< HEAD
const addButton = document.getElementById('add__button');
const inputBookTitle = document.getElementById('input__title');
const inputAuthor = document.getElementById('input__author');
const myLocalStorage = localStorage.getItem('data');

// Array Stored book
let storedBook = [];

// Array of Objects
const bookCollection = [];

// Use array.push({})

// REMOVE BOOK ####
function removeBook(b) {
  // Each Book item
  const bookCollectionItem = Array.from(
    document.getElementsByClassName('book')
  );

  Object.keys(bookCollectionItem).forEach((k) => {
    if (b === k) {
      bookCollectionItem[k].style.display = 'none';
    }
  });
}

// Create a function to ADD BOOK ####
function addBook() {
  // Save user input to Array Object
  if (inputAuthor.value !== '' && inputBookTitle.value !== '') {
    bookCollection.push({
      title: inputBookTitle.value,
      author: inputAuthor.value,
    });

    singleBook.innerHTML = `<p id="book__title">${inputBookTitle.value}</p>
    <p id="book__aurthor">${inputAuthor.value}</p>
    <button type="button" class="remove__button">Remove</button>
    <hr />`;
    book.appendChild(singleBook.cloneNode(true));
    bookItems.appendChild(book);
  }

  // Define the remove button after Creation
  const removeButton = Array.from(
    document.getElementsByClassName('remove__button')
  );
  Object.keys(removeButton).forEach((removeKey) => {
    removeButton[removeKey].addEventListener('click', () => {
      removeBook(removeKey);
=======
const inputBookTitle = document.getElementById('input__title');
const inputAuthor = document.getElementById('input__author');

// USE CLASSES
class BookClass {
  constructor() {
    this.list = localStorage.getItem('bookCollection')
      ? JSON.parse(localStorage.getItem('bookCollection'))
      : [];
  }

  addBook() {
    // Save user input to Array Object
    this.list.push({
      title: inputBookTitle.value,
      author: inputAuthor.value,
    });
    localStorage.setItem('bookCollection', JSON.stringify(this.list));

    // Refactoring
    inputBookTitle.value = '';
    inputAuthor.value = '';
  }

  removeBook(b) {
    // Parent Node with an ID of Book__title
    const title = b.querySelector('#book__title').innerText;
    b.remove();
    this.list = this.list.filter((book) => book.title !== title);

    localStorage.setItem('bookCollection', JSON.stringify(this.list));
  }
}

const BookInventory = new BookClass();

// Render the LIST OF BOOKS
function render() {
  book.innerHTML = '';

  BookInventory.list.forEach((currentBook) => {
    singleBook.innerHTML = `
    <p id="book__aurthor">"<span id="book__title">${currentBook.title}</span>" ${currentBook.author}</p>
    <button type="button" class="remove__button">Remove</button>`;
    book.appendChild(singleBook.cloneNode(true));
    bookItems.appendChild(book);
  });

  // Define the remove button after Creation
  const removeButton = Array.from(
    // eslint-disable-next-line comma-dangle
    document.getElementsByClassName('remove__button')
  );
  Object.keys(removeButton).forEach((removeKey) => {
    const btn = removeButton[removeKey];
    btn.addEventListener('click', () => {
      BookInventory.removeBook(btn.parentNode);
>>>>>>> b95453399aea803049197a803aa8fe734e577593
    });
  }, false);
}

<<<<<<< HEAD
// Get user data stored

// Add eventListner

addButton.addEventListener('click', addBook);

// demo Local Storage

// formOne.addEventListener('keyup', () => {
//   getUserData();
// });
// if (myLocalStorage) {
//   setUserData();
// }
=======
// To Render the saved file on the Page
render();

// ADD EVENTLISTNER
formOne.addEventListener('submit', (e) => {
  e.preventDefault();
  BookInventory.addBook();
  render();
});
>>>>>>> b95453399aea803049197a803aa8fe734e577593
