let myLibrary = ["Percy Jackson", "Percy", "James"];

function addBookToLibrary(...args) {
  myLibrary += args;
}

function Books() {
  for (const i of myLibrary) {
    console.log(i);
  }
}

Books();

const newBookButton = document.getElementById("newBook");
const toggleNewBookForm = document.getElementById("newBookForm");
newBookButton.addEventListener("click", function (e) {
  toggleNewBookForm.style.display = "block";
  e.preventDefault;
});
