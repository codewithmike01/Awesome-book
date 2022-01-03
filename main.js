const bookItems = document.getElementById('book__items');
const book = document.getElementById('book__container');
const singleBook = document.createElement('div');
singleBook.classList.add('book');
const formOne = document.getElementById('form__one');
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
    });
  }, false);
}

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
