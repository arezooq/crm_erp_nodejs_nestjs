import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AxiosResponse } from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  async getUsers() {
    return await this.appService.getUsers();
  }

  @Get('orders')
  async getOrders() {
    return await this.appService.getOrders();
  }

  @Get('products')
  async getProducts() {
    return await this.appService.getProducts();
  }

  @Get('reports')
  async getReports() {
    return await this.appService.getReports();
  }

}
