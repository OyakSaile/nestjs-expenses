import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { ZodValidationPipe } from 'src/lib/zod/zodValidationPipel';
import { CreateTransactionsDTO } from './dto/createTransaction.dto';
import { createTransactionSchema } from './validations/createTransactionSchema';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { User, UserPayload } from '../user/user.decorator';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  @UseGuards(AuthGuard)
  async findAll(@User() user: UserPayload) {
    return this.transactionService.findAll(user.id);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(AuthGuard)
  @UsePipes(new ZodValidationPipe(createTransactionSchema))
  async create(@Body() data: CreateTransactionsDTO) {
    return await this.transactionService.create(data);
  }
}
