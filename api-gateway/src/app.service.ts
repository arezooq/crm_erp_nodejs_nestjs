import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  /**
   * Get users from the User service
   */
  async getUsers(): Promise<AxiosResponse> {
    try {
      const response = await this.httpService.get('http://localhost:3001/users').toPromise(); // URL میکروسرویس کاربران
      return response.data
    } catch (error){
      throw new Error(`Error fetching users: ${error.message}`)
    }
  }

  /**
   * Get orders from the Order service
   */
  async getOrders(): Promise<AxiosResponse> {
    try {
      const response = await this.httpService.get('http://localhost:3002/orders').toPromise(); // URL میکروسرویس سفارشات
      return response.data
    } catch (error){
      throw new Error(`Error fetching orders: ${error.message}`)
    }
  }

  /**
   * Get products from the Product service
   */
  async getProducts(): Promise<AxiosResponse> {
    try {
      const response = await this.httpService.get('http://localhost:3003/products').toPromise(); // URL میکروسرویس محصولات
      return response.data
    } catch (error){
      throw new Error(`Error fetching products: ${error.message}`)
    }
  }

  /**
   * Get reports from the Report service
   */
  async getReports(): Promise<AxiosResponse> {
    try {
      const response = await this.httpService.get('http://localhost:3004/reports').toPromise(); // URL میکروسرویس گزارشات
      return response.data
    } catch (error){
      throw new Error(`Error fetching reports: ${error.message}`)
    }
  }
}
