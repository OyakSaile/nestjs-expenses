import { Module } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, TransactionModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
