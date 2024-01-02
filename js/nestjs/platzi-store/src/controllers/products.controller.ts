import { Query, Body,HttpCode,Put,Delete, Controller, Get, Param, Post, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';

import { HttpStatus } from '@nestjs/common';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {

  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId',ParseIntPipe) productId: number) {
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });
    return this.productsService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() payload: any) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id',ParseIntPipe) id: number) {
    return this.productsService.delete(+id);
  }
}
