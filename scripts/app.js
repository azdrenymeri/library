let bookArray = [];


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
