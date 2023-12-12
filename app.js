const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = `${this.title} by ${this.author}, ${this.pages} pages.`;
    this.cardContent = `<div class="card">
    <h3 class="title">"${this.title}"</h3>
    <p class="Author">${this.author}</p>
    <p class="Pages">${this.pages} Pages</p>
    <div class="card-bottom">
        <button class="${this.read}">${this.read}</button>
        <button class="delete">
            <img src="./images/admin-dashboard-icons.svg" height="100%" width="100%" alt="">
        </button>
    </div>
    </div>`;
    
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const doAndroidsDream = new Book('Do Androids Dream of Electric Sheep?',"Philip K. Dick", 123, 'read');
const electricDreams = new Book('Electric Dreams', 'Philip K. Dick', 323, 'read');
const harryPotter = new Book("Harry Potter", "J.K. Rowling", 486, 'read');
addBookToLibrary(harryPotter);
addBookToLibrary(doAndroidsDream);
addBookToLibrary(electricDreams);

console.log(myLibrary);

// Dom Objects
const addCard = document.querySelector('.card-add')

for (i in myLibrary) {
    let bookObject = myLibrary[i];
    addCard.insertAdjacentHTML("beforebegin", bookObject.cardContent);
}

