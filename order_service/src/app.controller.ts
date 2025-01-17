import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getOrders() {
    return [
      { orderId: 101, userId: 1, total: 100},
      { orderId: 102, userId: 2, total: 200}
    ]
  }
}
