import { JwtGuard } from '@auth/guards/jwt.guard';
import { User } from '@auth/models/user.class';
import { UserService } from '@auth/services/user.service';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get(':id')
  findUserById(@Param('id') id: string): Observable<User> {
    return this.userService.findUserById(id);
  }
}
