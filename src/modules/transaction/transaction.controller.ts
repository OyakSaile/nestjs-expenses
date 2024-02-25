import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { ZodValidationPipe } from 'src/lib/zod/zodValidationPipel';
import { CreateTransactionsDTO } from './dto/createTransaction.dto';
import { createTransactionSchema } from './validations/createTransactionSchema';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  async findAll(@Param('id') id: string) {
    return this.transactionService.findAll(id);
  }

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createTransactionSchema))
  async create(@Body() data: CreateTransactionsDTO) {
    return await this.transactionService.create(data);
  }
}
