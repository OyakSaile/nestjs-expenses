import { Module } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { TransactionModule } from './modules/transaction/transaction.module';

@Module({
  imports: [UserModule, TransactionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
