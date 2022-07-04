import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "./controller/product.controller";
import { ProductTypeormEntity } from "./entity/typeorm/product.typeorm.entity";
import ProductRepositoryTypeORM from "./repository/typeorm/product.repository.typeorm";
import { CreateProductService } from "./service/create-product-service";
import { FindAllProductService } from "./service/find-all-product-service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductTypeormEntity,      
    ]),
  ],
  controllers: [
    ProductController
  ],
  providers: [
    ProductRepositoryTypeORM,
    {
      inject: [ProductRepositoryTypeORM],
      provide: 'CreateProductService',
      useFactory: (productRepository: ProductRepositoryTypeORM) => new CreateProductService(productRepository)
    },
    {
      inject: [ProductRepositoryTypeORM],
      provide: 'FindAllProductService',
      useFactory: (productRepository: ProductRepositoryTypeORM) => new FindAllProductService(productRepository)
    }
  ],    
})
export class ProductModule {}