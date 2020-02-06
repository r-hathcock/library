let myLibrary = [];
const mainDiv = document.getElementById("main-container");
const footerTemplate = document.querySelector('template');

/**
 * [Book object constructor]
 * @param  {[string]} title [book title]
 * @param  {[string]} author [book author]
 * @param  {[string]} date [year book was first published]
 * @param  {[string]} length [length of book in pages]
 */
function Book(title, author, date, length) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.length = length;
}

/**
 * [display and functionality of modal and user entry form]
 */
function displayModal() {
    // popup modal to retrieve book information
    let modal = document.querySelector(".modal");
    let closeBtn = document.querySelector(".close-btn");
    let addBookBtn = document.getElementById("addBook");
    modal.style.display = "block";

    addBookBtn.onclick = function() {
        let bookForm = document.getElementById("bookEntry");
        let bookName = document.getElementById("bookTitle").value;
        let bookAuthor = document.getElementById("bookAuthor").value;
        let bookDate = document.getElementById("bookYear").value;
        let bookPages = document.getElementById("bookPages").value;
        const formInputs = [bookName, bookAuthor, bookDate, bookPages];
        
        // validation
        if (formInputs.includes("")) {
            alert("Please enter all values");
        } else {
            addBookToLibrary(bookName, bookAuthor, bookDate, bookPages);
            bookForm.reset();
            modal.style.display = "none";
        }
    } 

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
}

/**
 * [Creates book object based on entries from modal. Pushes onto myLibrary[]]
 * @param  {[string]} title [book title]
 * @param  {[string]} author [book author]
 * @param  {[string]} date [year book was first published]
 * @param  {[string]} length [length of book in pages]
 */
function addBookToLibrary(title, author, date, length) {
    var book = new Book(title, author, date, length);
    myLibrary.push(book);
    render();
}

/**
 * [Deletes chosen book card]
 * @param  {[element]} elem [parent element(book-card) of delete button that was clicked]
 */
function deleteBook(elem) {
    var bookIndex = elem.parentNode.parentNode.dataset.index;
    myLibrary.splice(bookIndex, 1);
    render();
}

/**
 * [Clears all book cards and re-renders contents of myLibrary]
 */
function render() {
    while (mainDiv.firstChild) {
        mainDiv.firstChild.remove();
    }

    for (let i = 0; i < myLibrary.length; i++)
    {
        createNewBookCard(i);
    }
}

/**
 * [Creates book card HTML element and appends info of book]
 * @param  {[number]} i [current index of myLibrary[]]
 */
function createNewBookCard(i) {
        // create bookelement div
        let newBookElement = document.createElement("div");
        newBookElement.className = 'book-card';
        newBookElement.setAttribute("data-index", i);

        // create title, author, date, and length <div>. Append to new bookelement
        let bookTitle = document.createElement("div");
        let textNode = document.createTextNode(myLibrary[i].title);
        bookTitle.className = "book-card-title";
        bookTitle.appendChild(textNode);
        newBookElement.appendChild(bookTitle);

        let bookAuthor = document.createElement("div");
        textNode = document.createTextNode(myLibrary[i].author);
        bookAuthor.className = "book-card-author";
        bookAuthor.appendChild(textNode);
        newBookElement.appendChild(bookAuthor);

        let bookDate = document.createElement("div");
        textNode = document.createTextNode(myLibrary[i].date);
        bookDate.className = "book-card-date";
        bookDate.appendChild(textNode);
        newBookElement.appendChild(bookDate);

        let bookLength = document.createElement("div");
        textNode = document.createTextNode(myLibrary[i].length + " pages");
        bookLength.className = "book-card-length";
        bookLength.appendChild(textNode);
        newBookElement.appendChild(bookLength);

        let footerNode = document.importNode(footerTemplate.content, true);
        newBookElement.appendChild(footerNode); 

        mainDiv.appendChild(newBookElement);
}