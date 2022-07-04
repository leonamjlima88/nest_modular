import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuthorTypeormEntity } from "./author.typeorm.entity";

@Entity({name: "book"})
export class BookTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:200})
    name: string;

    @ManyToOne(type => AuthorTypeormEntity, author => author.books, { cascade: ['insert'], eager: true })
    author: AuthorTypeormEntity
}