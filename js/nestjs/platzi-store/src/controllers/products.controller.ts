import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get(':productId')
  get(@Param() { productId }: any) {
    return `product ${productId}`
  }

  @Post()
  create(@Body() payload:any){
    return {
      message:'accion a crear',
      payload
    }
  }
}
