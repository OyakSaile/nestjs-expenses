import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionsDTO } from './dto/createTransaction.dto';

@Injectable()
export class TransactionService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(data: CreateTransactionsDTO) {
    return await this.prismaService.transaction.create({
      data: {
        ...data,
        userId: 'ec55e357-f5fe-4884-b1b7-32530b339e66',
      },
    });
  }
  async findAll(userId: string) {
    return await this.prismaService.transaction.findMany({
      where: {
        id: userId,
      },
    });
  }
}
