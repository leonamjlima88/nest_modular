import { BookDomain } from "src/modules/book/domain/book.domain"

export class AuthorDomain {
  id: string
  name: string
  books: BookDomain[]
}