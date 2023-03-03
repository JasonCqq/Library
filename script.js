const allBooks = document.querySelectorAll(".book");
const book2 = document.querySelector(".book2");
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
    console.log(myLibrary);
    console.log(i);
    const book1TitleElement = document.querySelector(".book1Title");
    const book1AuthorElement = document.querySelector(".book1Author");
    const book1PagesElement = document.querySelector(".book1Pages");
    const book1CompletionElement = document.querySelector(".book1Completion");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    btn1.innerHTML = "Remove Book";

    book1TitleElement.textContent = `${i.title}`;
    book1TitleElement.style.cssText =
      "font-size: 24px; text-decoration: underlined; font-weight: bold; ";
    book1AuthorElement.textContent = `AUTHOR: ${i.author}`;
    book1PagesElement.textContent = `# OF PAGES: ${i.pages}`;
    btn1.style.cssText =
      "display:flex; align-self: center; justify-content: center; border: none; background-color: red; width: 20vh; height: 3vh; font-weight: bold; font-size: 20px; border-radius: 25px; margin-top: 15vh; color: white;";
    console.log(i.completed);
    if (i.completed === false) {
      btn2.innerHTML = "STATUS: INCOMPLETE";
      btn2.style.cssText =
        " display:flex; border: none; border-radius: 15px; padding: 10px; background-color: grey; color: white;";
      book1CompletionElement.appendChild(btn2);
    } else if (i.completed === true) {
      btn2.innerHTML = "STATUS: COMPLETE";
      btn2.style.cssText =
        " display:flex; border: none; border-radius: 15px; padding: 10px; background-color: green; color: white;";
      book1CompletionElement.appendChild(btn2);
    }

    book1.appendChild(btn1);
    btn2.addEventListener("click", () => {
      if (btn2.innerHTML === "STATUS: INCOMPLETE") {
        btn2.innerHTML = "STATUS: COMPLETE";
        btn2.style.cssText =
          " display:flex; border: none; border-radius: 15px; padding: 10px; background-color: green; color: white;";
      } else if (btn2.innerHTML === "STATUS: COMPLETE") {
        btn2.innerHTML = "STATUS: INCOMPLETE";
        btn2.style.cssText =
          " display:flex; border: none; border-radius: 15px; padding: 10px; background-color: grey; color: white;";
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

  //   addBookButton.style.display = "none";
  newBookForm.style.display = "none";
  book2.appendChild(newBookButton);
  newBookButton.style.display = "block";

  e.preventDefault();
});
