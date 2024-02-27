import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionsDTO } from './dto/createTransaction.dto';

@Injectable()
export class TransactionService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(data: CreateTransactionsDTO) {
    const mockedUser = await this.prismaService.user.findFirstOrThrow();

    if (!mockedUser) throw new NotFoundException('User not found');

    return await this.prismaService.transaction.create({
      data: {
        ...data,
        userId: mockedUser?.id,
      },
    });
  }

  async findAll(id: string) {
    return await this.prismaService.transaction.findMany({
      where: {
        userId: id,
      },
    });
  }
}
