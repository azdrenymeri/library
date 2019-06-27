const bookArray = []; // global array


/**
 * Adds two numbers together.
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
*@param{Object} book is the newly created book
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
