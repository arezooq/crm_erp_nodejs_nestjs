import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers() {
    return [
      { id: 1, name: 'John Doe'},
      { id: 2, name: 'Jane Smith'},
      { id: 3, name: 'Arezoo Ghorbanzade'}
    ]
  }
}
