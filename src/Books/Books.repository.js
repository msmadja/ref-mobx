import ApiGateway from "../Shared/ApiGateway.js";

class BooksRepository {
  constructor() {
    this.httpGateway = new ApiGateway();
  }

  getBooks = async (p) => {
    const suffix = p ? "private" : "";
    const booksDto = await this.httpGateway.get("/" + suffix);
    return booksDto;
  };

  addBook = async ({ name, author }) => {
    const bookAddDto = await this.httpGateway.post("/", { name, author });
    return bookAddDto && bookAddDto.status === "ok" ? true : false;
  };

  resetBooks = async () => { 
    const bookReset = await this.httpGateway.put("/reset");
    return bookReset && bookReset.status === "ok" ? true : false;
  }
}

const booksRepository = new BooksRepository();
export default booksRepository;
