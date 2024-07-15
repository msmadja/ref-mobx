import bookController from './Books.ctrl';
import bookRepository from './Books.repository';

jest.mock('./Books.repository');

describe('BooksController', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('loads books successfully', async () => {
    await bookController.load();
    expect(bookRepository.getBooks).toHaveBeenCalledTimes(1);
  });

  test('adds a book successfully', async () => {
    const newBook = { name: 'New Book', author: 'New Author' };
    await bookController.addBook(newBook);
    expect(bookRepository.addBook).toHaveBeenCalledTimes(1);
    expect(bookRepository.addBook).toHaveBeenCalledWith(newBook);
  });
});