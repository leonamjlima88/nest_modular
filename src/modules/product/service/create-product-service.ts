import { IProductRepository } from "src/modules/product/repository/product.repository.interface";
import { ProductDomain } from "../domain/product.domain";

export class CreateProductService{
    constructor(private readonly repository: IProductRepository){}

    async create(productDTO: ProductDomain): Promise<ProductDomain>{
        return this.repository.save(productDTO)
    }
}