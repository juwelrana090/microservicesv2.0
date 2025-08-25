import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './orders/orders.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, OrdersController, UsersController],
  providers: [AppService],
})
export class AppModule {}
