import { BookTypeormEntity } from "src/modules/book/entity/typeorm/book.typeorm.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "author"})
export class AuthorTypeormEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100})
    name: string;

    @OneToMany(type => BookTypeormEntity, book => book.author, { cascade: ['remove'] })
    books: BookTypeormEntity[]

}