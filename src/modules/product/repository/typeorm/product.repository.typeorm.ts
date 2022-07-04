import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductDomain } from "../../domain/product.domain";
import { ProductTypeormEntity } from "../../entity/typeorm/product.typeorm.entity";
import { IProductRepository } from "../product.repository.interface";

@Injectable()
export default class ProductRepositoryTypeORM implements IProductRepository {
    private readonly logger = new Logger(ProductRepositoryTypeORM.name);

    constructor(@InjectRepository(ProductTypeormEntity) private readonly productEntityRepository: Repository<ProductTypeormEntity>){}

    async save(product: ProductDomain): Promise<ProductDomain> {
        const productEntity: ProductTypeormEntity = this.mapToProductEntity(product)
        const productSaved: ProductTypeormEntity = await this.productEntityRepository.save(productEntity)

        return this.mapToProductDomain(productSaved)
    }

    async findAll(): Promise<ProductDomain[]> {
        const productEntityArray: ProductTypeormEntity[] = await this.productEntityRepository.find()
        const productArray: ProductDomain[] = productEntityArray.map((productEntity) => {
            return this.mapToProductDomain(productEntity)
        });

        return productArray;
    }

    private mapToProductEntity(product: ProductDomain): ProductTypeormEntity {
        let productEntity: ProductTypeormEntity = new ProductTypeormEntity();
        productEntity.id = product.id
        productEntity.name = product.name
        productEntity.price = product.price

        return productEntity
    }

    private mapToProductDomain(productEntity: ProductTypeormEntity): ProductDomain{
        let product: ProductDomain = new ProductDomain()
        
        product.id = productEntity.id
        product.name = productEntity.name
        product.price = productEntity.price

        return product
    }
    
}