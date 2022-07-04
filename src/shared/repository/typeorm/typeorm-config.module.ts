import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthorTypeormEntity } from "src/modules/book/entity/typeorm/author.typeorm.entity";
import { BookTypeormEntity } from "src/modules/book/entity/typeorm/book.typeorm.entity";
import BookRepositoryTypeORM from "src/modules/book/repository/typeorm/book.repository.typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            "type": "mysql",
            "host": "localhost",
            "port": 3306,
            "username": "root",
            "password": "root",
            "database": "nest",
            "entities": ["dist/**/*.entity{.ts,.js}"],
            "synchronize": true,
            "autoLoadEntities": true
        }),
        TypeOrmModule.forFeature([
            BookTypeormEntity, 
            AuthorTypeormEntity,            
        ])
    ],
    providers: [
        BookRepositoryTypeORM,        
    ],
    exports: [
        BookRepositoryTypeORM,        
    ]

})
export class TypeOrmConfigModule { }