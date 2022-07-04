import { BookDomain } from "../domain/book.domain"

export interface IBookRepository{
  save(book: BookDomain): Promise<BookDomain>
  findAll(): Promise<BookDomain[]>
}