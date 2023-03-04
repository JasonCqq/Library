const libraryWrapper = document.getElementById("libraryWrapper");
const newBookButton = document.getElementById("newBook");
const addBookButton = document.getElementById("addBook");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookPages = document.getElementById("bookPages");
const bookCompletion = document.getElementById("bookCompletion");
const newBookForm = document.getElementById("newBookForm");

let myLibrary = [];
let counter = 0; //to keep count of how many books are generated so far

function uniqueID() {
  return Date.now() * Math.random();
}

function addBookToLibrary() {
  let div = document.createElement("div");
  div.classList.add("book");

  const btn = document.createElement("button");
  btn.innerHTML = "Remove";

  const p = document.createElement("p");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  let book = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookCompletion.checked,
    uniqueID()
  );
  myLibrary.push(book);
  libraryWrapper.appendChild(div);
  div.dataset.id = `${myLibrary[counter].id}`;

  p.textContent = `Title: ${myLibrary[counter].title}`;
  div.appendChild(p);
  p1.textContent = `Author: ${myLibrary[counter].author}`;
  div.appendChild(p1);
  p2.textContent = `# of Pages: ${myLibrary[counter].pages}`;
  div.appendChild(p2);
  const btn2 = document.createElement("button");
  btn2.innerHTML = `COMPLETED: ${myLibrary[counter].completed}`;
  div.appendChild(btn2);

  btn2.addEventListener("click", () => {
    if (btn2.innerHTML.includes("true")) {
      btn2.innerHTML = `COMPLETED: false`;
    } else if (btn2.innerHTML.includes("false")) {
      btn2.innerHTML = `COMPLETED: true`;
    }
  });

  div.appendChild(btn);
  btn.addEventListener("click", () => {
    div.remove();
  });
  counter++;
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookCompletion.checked = false;
}

class Book {
  constructor(title, author, pages, completed, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completed = completed;
    this.id = id;
  }
}

newBookButton.addEventListener("click", () => {
  newBookButton.style.display = "none";
  newBookForm.style.display = "block";
});

addBookButton.addEventListener("click", function (e) {
  addBookToLibrary();

  newBookForm.style.display = "none";
  newBookButton.style.display = "block";

  e.preventDefault();
});
