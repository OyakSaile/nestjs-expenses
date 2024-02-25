import { TransactionTypeEnum } from '../enums/transactionTypeEnum';

export interface ListAllTransactionsDTO {
  id: string;
  amount: number;
  description?: string;
  category: string;
  title: string;
  date: Date;
  type: TransactionTypeEnum;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
