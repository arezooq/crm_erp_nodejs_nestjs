import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProducts() {
    return [
      {productId: 1, name: 'Product 1', price: 100},
      {productId: 2, name: 'Product 2', price: 200},
    ]
  }
}
