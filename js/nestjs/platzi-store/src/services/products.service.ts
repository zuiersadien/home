import { Injectable ,NotFoundException } from '@nestjs/common';
import { throws } from 'assert';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [{
    id: 1,
    name: 'Product 1',
    description: 'bla bla bla ',
    price: 123,
    image: '',
    stock: 123
  }]
  private counterId = 1

  findAll() {
    return this.products
  }
  findOne(id: number) {
    const product = this.products.find(e => e.id === id)
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`) 
    }
    return product
  }

  create(product: CreateProductDto) {
    this.counterId++
    const newProduct = {
      id: this.counterId,
      ...product
    }
    this.products.push(newProduct)
    return newProduct
  }
  update(id: number, product: UpdateProductDto) {
    let updateProduct = this.products.findIndex(e => e.id === id)
    this.products[updateProduct] = { ...this.findOne(id), ...product }
    return updateProduct
  }
  delete(id: number) {
    const productDelete=this.findOne(id)
    if (productDelete){
      const index =this.products.findIndex(e=>e.id===id)
      this.products.splice(index,1)
      return productDelete
    }
    return null
  }
}
