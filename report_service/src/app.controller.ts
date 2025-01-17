import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getReports() {
    return [
      {reportId: 1, title: 'Sales Report', content: 'This is a sales report.'},
      {reportId: 2, title: 'Inventory Report', content: 'This is an inventory report.'},
    ]
  }
}
