import { makeObservable, observable, action } from "mobx"

class BookStore {
    books = [];

    constructor() {
        makeObservable(this, {
            books: observable,
            addBook: action
        })
    }

    addBooks(books = []) { 
        this.books = [...books];
    }

    addBook(book) {
        this.books.push(book);
      }

    resetBooks(books) {
        this.books.push(books);
    }
}

const bookStore = new BookStore();
export default bookStore;