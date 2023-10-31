import { Controller, Get, HttpException, HttpStatus, UseFilters, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './decorator/user/user.decorator';
import { RoleGuard } from './guard/role/role.guard';
import { Roles } from './decorator/roles/roles.decorator';
import { Auth } from './decorator/auth/auth.decorator';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Auth('staff', 'admin')
  @Get()
  getHello(@User('name') name: any): string {
    return name
    // return this.appService.getHello();
  }
}
