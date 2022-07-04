import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "product"})
export class ProductTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100})
    name: string;

    @Column("decimal", { precision: 15, scale: 4 })
    price: number;
}