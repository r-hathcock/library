// array to store books
let myLibrary = [];

// constructor for book objects
function Book(title, author, year, length) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.length = length;
}


// prompts user for book details when "add book" button is clicked
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
    myLibrary.push(book);
    render();
}

// creates book cards based on data from myLibrary[] 
function render() {
    var mainDiv = document.getElementById("main-container");

    for (let i = 0; i < myLibrary.length; i++)
    {
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
        textNode = document.createTextNode(myLibrary[i].length);
        bookLength.className = "book-card-length";
        bookLength.appendChild(textNode);
        newBookElement.appendChild(bookLength);

        mainDiv.appendChild(newBookElement);
    }
    
}