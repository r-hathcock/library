// array to store books
let myLibrary = [];

// constructor for book objects
function Book(title, author, year, length) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.length = length;
}

var textNode = "hello";
// adds book to myLibrary
function displayModal() {
    // popup modal to retrieve book information
    let modal = document.querySelector(".modal");
    let closeBtn = document.querySelector(".close-btn");
    let addBookBtn = document.getElementById("addBook");

    modal.style.display = "block";

    addBookBtn.onclick = function() {
        addBookToLibrary();
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

function addBookToLibrary() {
    var mainDiv = document.getElementById("main-container");
    var newBook = document.createElement("div");
    newBook.className = 'book';

    var newContent = document.createTextNode(textNode);
    newBook.appendChild(newContent);
    mainDiv.appendChild(newBook);
}

// updates page with new or deleted books
function render() {

}