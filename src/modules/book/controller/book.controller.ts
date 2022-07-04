import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { CreateBookService } from "../service/create-book-service";
import { FindAllBookService } from "../service/find-all-book-service";
import { BookDomain } from "../domain/book.domain";

@Controller('book')
export class BookController {
    constructor(@Inject('CreateBookService') private readonly createBookService: CreateBookService,
                @Inject('FindAllBookService') private readonly findAllBookService: FindAllBookService){}

    @Get()
    public findAll(): Promise<BookDomain[]>{
        return this.findAllBookService.findAll()
    }

    @Post()
    public createBook(@Body() book: BookDomain): Promise<BookDomain>{
        return this.createBookService.create(book)
    }

}