import bookStore from './Books.model';
import bookRepository from './Books.repository';


class BooksController {

get books$() { 
     return bookStore.books;
}

  load = async (p) => { 
    const books = await bookRepository.getBooks(p);
    bookStore.addBooks(books);
  }

  addBook = async ({ name, author }) => {
    const bookAddDto = await bookRepository.addBook({name, author});
    if(bookAddDto) { 
        bookStore.addBook({ name, author })
    }
  };

}

const bookController = new BooksController();
export default bookController;