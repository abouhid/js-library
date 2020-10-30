let bookList = document.getElementById("book-list");
let form = document.getElementById("book-form");
let submit = document.getElementById("submit");


let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.getElementById("title-input").value;
    let author = document.getElementById("author-input").value;
    let pages = document.getElementById("pages-input").value;
    let read = document.getElementById("read-input").checked;
 
    book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayLibrary(myLibrary)
    form.reset();
}

function displayLibrary(array) {
    while (bookList.firstChild) {
        bookList.removeChild(bookList.firstChild)
    }
    

    for (let i = 0; i < array.length; i++) {
        let bookContainer = document.createElement('div');
        let title = document.createElement('h3');
        let author = document.createElement('p');
        let pages = document.createElement('p');
        let read = document.createElement('p');

        title.textContent = array[i].title;
        author.textContent = array[i].author;
cre        pages.textContent = array[i].pages + " pages";
        if (array[i].read) {
        read.textContent = "You have already read this book!";
        }
        else{
        read.textContent = "You haven't read this book yet!";       
        }
        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(pages);
        bookContainer.appendChild(read);
        bookList.appendChild(bookContainer);
    }

}

function showForm(a)
{
    if(form.style.display==="block")
        form.style.display="none";
    else
        form.style.display="block";
}

function defaultBooks() {

    let defaultList = new Book( "The Winds of Winter", "GRRM", 134, true);
    defaultList = new Book( "The Winds of Winter2", "GRRM", 134, true);

    console.log(defaultList)
    myLibrary.push(defaultList);
    displayLibrary(myLibrary)
}


submit.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
    form.style.display="none";
})

defaultBooks();
