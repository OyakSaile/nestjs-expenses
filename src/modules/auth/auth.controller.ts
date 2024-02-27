import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { SignInDto } from './dto/signIn.dto';
import { ZodValidationPipe } from 'src/lib/zod/zodValidationPipel';
import { signInSchema } from './validations/signInSchema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @UsePipes(new ZodValidationPipe(signInSchema))
  async signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const token = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    );

    response.cookie('access_token', token.access_token);

    return { message: 'User signed' };
  }
}
