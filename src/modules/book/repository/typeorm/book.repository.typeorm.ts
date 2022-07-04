import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthorDomain } from "src/modules/book/domain/author.domain";
import { Repository } from "typeorm";
import { BookDomain } from "../../domain/book.domain";
import { AuthorTypeormEntity } from "../../entity/typeorm/author.typeorm.entity";
import { BookTypeormEntity } from "../../entity/typeorm/book.typeorm.entity";
import { IBookRepository } from "../book.repository.interface";

@Injectable()
export default class BookRepositoryTypeORM implements IBookRepository {
    private readonly logger = new Logger(BookRepositoryTypeORM.name);

    constructor(@InjectRepository(BookTypeormEntity) private readonly bookEntityRepository: Repository<BookTypeormEntity>){}

    async save(book: BookDomain): Promise<BookDomain> {
        const bookEntity: BookTypeormEntity = this.mapToBookEntity(book)
        const bookSaved: BookTypeormEntity = await this.bookEntityRepository.save(bookEntity)

        return this.mapToBookDomain(bookSaved)
    }

    async findAll(): Promise<BookDomain[]> {
        const bookEntityArray: BookTypeormEntity[] = await this.bookEntityRepository.find()
        const bookArray: BookDomain[] = bookEntityArray.map((bookEntity) => {
            return this.mapToBookDomain(bookEntity)
        });

        return bookArray;
    }

    private mapToBookEntity(book: BookDomain): BookTypeormEntity {
        let bookEntity: BookTypeormEntity = new BookTypeormEntity();
        bookEntity.id = book.id
        bookEntity.name = book.name

        let authorEntity = new AuthorTypeormEntity()
        if(!!book.author.id){
            authorEntity.id = Number(book.author.id)
        }
        authorEntity.name = book.author.name
        bookEntity.author = authorEntity

        return bookEntity
    }

    private mapToBookDomain(bookEntity: BookTypeormEntity): BookDomain{
        let book: BookDomain = new BookDomain()
        
        book.id = bookEntity.id
        book.name = bookEntity.name
        let author: AuthorDomain = new AuthorDomain()
        author.name = bookEntity.author?.name
        book.author = author

        return book
    }
    
}