import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookController } from "./controller/book.controller";
import { AuthorTypeormEntity } from "./entity/typeorm/author.typeorm.entity";
import { BookTypeormEntity } from "./entity/typeorm/book.typeorm.entity";
import BookRepositoryTypeORM from "./repository/typeorm/book.repository.typeorm";
import { CreateBookService } from "./service/create-book-service";
import { FindAllBookService } from "./service/find-all-book-service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BookTypeormEntity, 
      AuthorTypeormEntity
    ]),
  ],
  controllers: [
    BookController
  ],
  providers: [
    BookRepositoryTypeORM,
    {
      inject: [BookRepositoryTypeORM],
      provide: 'CreateBookService',
      useFactory: (bookRepository: BookRepositoryTypeORM) => new CreateBookService(bookRepository)
    },
    {
      inject: [BookRepositoryTypeORM],
      provide: 'FindAllBookService',
      useFactory: (bookRepository: BookRepositoryTypeORM) => new FindAllBookService(bookRepository)
    }
  ],    
})
export class BookModule {}