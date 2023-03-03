class Book {
  constructor(title, author, pages, completed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completed = completed;
  }
}

let myLibrary = [];

function Books() {
  for (const i of myLibrary) {
    console.log(i.title);
    console.log(i.author);
    console.log(i.pages);
    console.log(i.completed);
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const newBookButton = document.getElementById("newBook");
const addBookButton = document.getElementById("addBook");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookPages = document.getElementById("bookPages");
const bookCompletion = document.getElementById("bookCompletion");

const toggleNewBookForm = document.getElementById("newBookForm");

newBookButton.addEventListener("click", () => {
  newBookButton.style.display = "none";
  toggleNewBookForm.style.display = "block";
});

addBookButton.addEventListener("click", function (e) {
  const book1 = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookCompletion.value
  );

  addBookToLibrary(book1);
  console.log(book1);
  Books();
  e.preventDefault();
});

Books();
