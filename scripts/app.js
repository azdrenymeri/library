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
  render();
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
/**
* this function is the handler of the checkbox  and it will toggle ita
* @param{event} event is the event
*/
function toggleIsRead(event) {
  if (event.target.checked) {
    event.target.checked = false;
  } else {
    event.target.checked = true;
  }
}

// DOM Manipulation part

/**
* This method renders the books on the table
*/
function render() {
  const table = document.getElementById('bookTable');

  // cleaning table from rows
  for (let i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  bookArray.forEach(function(book, index) {
    let tr = document.createElement('tr');
    tr.setAttribute('data-key', index);


    let titleTd = document.createElement('td');
    titleTd.innerText = book.title;
    let authorTd = document.createElement('td');
    authorTd.innerText = book.author;
    let numPagesTd = document.createElement('td');
    numPagesTd.innerText = book.numPages;
    let isReadTd = document.createElement('td');

    let isReadCheckBox = document.createElement('input');
    isReadCheckBox.type = 'checkbox';
    isReadCheckBox.id = 'isReadCheck';
    isReadCheckBox.checked = book.isRead;
    isReadCheckBox.addEventListener('clik', toggleIsRead);
    isReadTd.appendChild(isReadCheckBox);


    tr.appendChild(titleTd);
    tr.appendChild(authorTd);
    tr.appendChild(numPagesTd);
    tr.appendChild(isReadTd);


    const btn = document.createElement('input');
    btn.type = 'button';
    btn.className = 'btn';
    btn.value = 'delete';
    btn.addEventListener('click', function() {
      deleteBook(index);
    });
    tr.appendChild(btn);
    table.appendChild(tr);
  });
}
