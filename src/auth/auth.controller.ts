import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: User) {
    const token = await this.authService.generateJwtToken(user);
    return { access_token: token };
  }
}
