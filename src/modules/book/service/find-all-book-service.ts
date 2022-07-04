import { IBookRepository } from "src/modules/book/repository/book.repository.interface";
import { BookDomain } from "../domain/book.domain";

export class FindAllBookService{
    constructor(private readonly repository: IBookRepository){}

    async findAll(): Promise<BookDomain[]>{
        return this.repository.findAll()
    }
}