const bookArray = []; // global array

// MVP part
/**
 * This is the booj object
 * @param {string} title The title of the book
 * @param {string} author The author of the book
 * @param {int} numPages The number of pages of the book
 * @param {boolean}isRead Has the book been readed yet ?
 */
function Book(title, author, numPages, isRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead;
}
/**
*@param{Object} book adds a newly created book into array
*/
function addBookToLibrary(book) {
  bookArray.push(book);
}
/**
*@param{int} index is the index where the book is stored in array
*/
function deleteBook(index) {
  bookArray.splice(index, 1);
}
/**
*@param{int} index is the index of the book in the array that we gonna modify
*/
function readBook(index) {
  bookArray.forEach(function(book) {
    if (book.isRead === false) {
      book.isRead = true;
    } else {
      book.isRead = false;
    }
  });
}
// Listeners
document.getElementById('submitBookBtn').addEventListener('click', createNewBook);

/**
* The handler of the button 'Submit book'
@param{e} e is the event
*/
function createNewBook(e) {
  // getting data from the form
  const title = document.getElementById('bookTitle');
  const author = document.getElementById('bookAuthor');
  const numPages = document.getElementById('bookNumPages');
  const isRead = document.getElementById('isRead').checked? true : false;
  // creating the Book object
  const book = new Book(title.value, author.value, numPages.value, isRead);
  // adding it to the main array of books
  addBookToLibrary(book);
  // removing text from the form
  title.value = '';
  author.value = '';
  numPages.value = '';
  // re-rendering the table of data
  render();
}

// DOM Manipulation part

/**
* This method renders the books on the table
*/
function render() {

}
