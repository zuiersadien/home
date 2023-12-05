import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'hola Mundo';
  }
  @Get('products/:productId')
  newEndpoint(@Param() params:any ){
    return ` product ${params.productId}`
  }

}
