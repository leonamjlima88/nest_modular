import { IProductRepository } from "src/modules/product/repository/product.repository.interface";
import { ProductDomain } from "../domain/product.domain";

export class FindAllProductService{
    constructor(private readonly repository: IProductRepository){}

    async findAll(): Promise<ProductDomain[]>{
        return this.repository.findAll()
    }
}