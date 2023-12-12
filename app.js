const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = `${this.title} by ${this.author}, ${this.pages} pages.`;
    
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const doAndroidsDream = new Book('Do Androids Dream of Electric Sheep?',"Philip K. Dick", 123, true);
const electricDreams = new Book('Electric Dreams', 'Philip K. Dick', 323, true);
const harryPotter = new Book("Harry Potter", "J.K. Rowling", 486, true);
addBookToLibrary(harryPotter);
addBookToLibrary(doAndroidsDream);
addBookToLibrary(electricDreams);

console.log(myLibrary);
