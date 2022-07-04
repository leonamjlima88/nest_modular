import { IBookRepository } from "src/modules/book/repository/book.repository.interface";
import { BookDomain } from "../domain/book.domain";

export class CreateBookService{
    constructor(private readonly repository: IBookRepository){}

    async create(bookDTO: BookDomain): Promise<BookDomain>{
        return this.repository.save(bookDTO)
    }
}