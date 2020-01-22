// array to store books
let myLibrary = [];

// constructor for book objects
function Book(title, author, year, length) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.length = length;
}


// adds book to myLibrary
function displayModal() {
    // popup modal to retrieve book information
    let modal = document.querySelector(".modal");
    let closeBtn = document.querySelector(".close-btn");
    let addBookBtn = document.getElementById("addBook");

    modal.style.display = "block";

    addBookBtn.onclick = function() {
        let bookName = document.getElementById("bookTitle").value;
        let bookAuthor = document.getElementById("bookAuthor").value;
        let bookDate = document.getElementById("bookYear").value;
        let bookPages = document.getElementById("bookPages").value;

        addBookToLibrary(bookName, bookAuthor, bookDate, bookPages); 
        modal.style.display = "none";
    } 

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    } 
}

function addBookToLibrary(title, author, date, length) {
    var book = new Book(title, author, date, length);

    render();
}

// updates page with new or deleted books
function render() {
    var textNode = "hello";
    var mainDiv = document.getElementById("main-container");
    var newBookElement = document.createElement("div");
    newBookElement.className = 'book';

    var newContent = document.createTextNode(textNode);
    newBookElement.appendChild(newContent);
    mainDiv.appendChild(newBookElement);
}