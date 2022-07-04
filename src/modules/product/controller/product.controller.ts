import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { CreateProductService } from "../service/create-product-service";
import { FindAllProductService } from "../service/find-all-product-service";
import { ProductDomain } from "../domain/product.domain";

@Controller('product')
export class ProductController {
    constructor(@Inject('CreateProductService') private readonly createProductService: CreateProductService,
                @Inject('FindAllProductService') private readonly findAllProductService: FindAllProductService){}

    @Get()
    public findAll(): Promise<ProductDomain[]>{
        return this.findAllProductService.findAll()
    }

    @Post()
    public createProduct(@Body() product: ProductDomain): Promise<ProductDomain>{
        return this.createProductService.create(product)
    }

}