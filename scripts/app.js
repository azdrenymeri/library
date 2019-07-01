const bookArray = []; // global array

function Book(title, author, numPages, isRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);
  bookArray.push(book);
}

function deleteBook(index) {
  bookArray.splice(index, 1);
  renderTable();
}


document.getElementById('submitBookBtn').addEventListener('click', createNewBook);

function createNewBook(e) {
  // getting data from the form
  const title = document.getElementById('bookTitle');
  const author = document.getElementById('bookAuthor');
  const numPages = document.getElementById('bookNumPages');
  const isRead = document.getElementById('isRead').checked? true : false;


  addBookToLibrary(title.value, author.value, numPages.value, isRead);


  title.value = '';
  author.value = '';
  numPages.value = '';

  renderTable();
}

Book.prototype.toggleIsRead = function(index) {
  bookArray[index].isRead=!bookArray[index].isRead;
  renderTable();
};

// DOM Manipulation part
function renderTable() {
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
    isReadCheckBox.addEventListener('change',(event)=> book.toggleIsRead(event.target.parentElement.parentElement.getAttribute('data-key')));
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
