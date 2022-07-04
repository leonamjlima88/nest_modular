import { AuthorDomain } from "src/modules/book/domain/author.domain"

export class BookDomain {
  id: number
  name: string
  author: AuthorDomain
}