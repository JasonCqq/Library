const book1 = document.querySelector(".book1");

const newBookButton = document.getElementById("newBook");
const addBookButton = document.getElementById("addBook");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookPages = document.getElementById("bookPages");
const bookCompletion = document.getElementById("bookCompletion");
const newBookForm = document.getElementById("newBookForm");

class Book {
  constructor(title, author, pages, completed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completed = completed;
  }
}

let myLibrary = [];

function Books(book) {
  for (const i of myLibrary) {
    const book1TitleElement = document.querySelector(".book1Title");
    const book1AuthorElement = document.querySelector(".book1Author");
    const book1PagesElement = document.querySelector(".book1Pages");
    const book1CompletionElement = document.querySelector(".book1Completion");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    btn1.innerHTML = "Remove Book";

    book1TitleElement.textContent = `Book #1 TITLE: ${i.title}`;
    book1AuthorElement.textContent = `AUTHOR: ${i.author}`;
    book1PagesElement.textContent = `PAGES: ${i.pages}`;
    console.log(i.completed);
    if (i.completed === false) {
      btn2.innerHTML = "STATUS: INCOMPLETE";
      book1CompletionElement.appendChild(btn2);
    } else if (i.completed === true) {
      btn2.innerHTML = "STATUS: COMPLETE";
      book1CompletionElement.appendChild(btn2);
    }

    book1.appendChild(btn1);
    btn2.addEventListener("click", () => {
      if (btn2.innerHTML === "STATUS: INCOMPLETE") {
        btn2.innerHTML = "STATUS: COMPLETE";
      } else if (btn2.innerHTML === "STATUS: COMPLETE") {
        btn2.innerHTML = "STATUS: INCOMPLETE";
      }
    });

    btn1.addEventListener("click", () => {
      i.title = "";
      i.author = "";
      i.pages = "";
      i.completed = "";
      book1TitleElement.textContent = "";
      book1AuthorElement.textContent = "";
      book1PagesElement.textContent = "";
      book1CompletionElement.textContent = "";
      btn1.style.display = "none";
    });
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

newBookButton.addEventListener("click", () => {
  newBookButton.style.display = "none";
  newBookForm.style.display = "block";
});

addBookButton.addEventListener("click", function (e) {
  const book_1 = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookCompletion.checked
  );

  addBookToLibrary(book_1);
  Books(book_1);

  addBookButton.style.display = "none";
  newBookForm.style.display = "none";

  //   book2.appendChild(newBookForm);

  e.preventDefault();
});
