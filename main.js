const bookItems = document.getElementById('book__items');
const book = document.getElementById('book__container');
const singleBook = document.createElement('div');
singleBook.classList.add('book');
const formOne = document.getElementById('form__one');
const inputBookTitle = document.getElementById('input__title');
const inputAuthor = document.getElementById('input__author');

// Array of Objects
let bookCollection = localStorage.getItem('bookCollection')
  ? JSON.parse(localStorage.getItem('bookCollection'))
  : [];

// USE CLASSES
class BookInventory {
  static addBook() {
    // Save user input to Array Object

    bookCollection.push({
      title: inputBookTitle.value,
      author: inputAuthor.value,
    });
    localStorage.setItem('bookCollection', JSON.stringify(bookCollection));

    // Refactoring
    inputBookTitle.value = '';
    inputAuthor.value = '';
  }

  static removeBook(b) {
    // Parent Node with an ID of Book__title
    const title = b.querySelector('#book__title').innerText;
    b.remove();
    bookCollection = bookCollection.filter((book) => book.title !== title);

    localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  }
}

// Render the LIST OF BOOKS
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
    const btn = removeButton[removeKey];
    btn.addEventListener('click', () => {
      BookInventory.removeBook(btn.parentNode);
    });
  }, false);
}

// To Render the saved file on the Page
render();

// ADD EVENTLISTNER
formOne.addEventListener('submit', (e) => {
  e.preventDefault();
  BookInventory.addBook();
  render();
});
