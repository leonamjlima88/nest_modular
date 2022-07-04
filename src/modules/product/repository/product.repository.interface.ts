import { ProductDomain } from "../domain/product.domain"

export interface IProductRepository{
  save(book: ProductDomain): Promise<ProductDomain>
  findAll(): Promise<ProductDomain[]>
}