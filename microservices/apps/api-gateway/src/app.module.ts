import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from './constants';
import { OrdersController } from './orders/orders.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICROSERVICES_CLIENTS.ORDERS,
        transport: Transport.TCP,
        options: {
          port: 4001,
        },
      },
      {
        name: MICROSERVICES_CLIENTS.PRODUCTS,
        transport: Transport.TCP,
        options: {
          port: 4002,
        },
      },
      {
        name: MICROSERVICES_CLIENTS.USERS,
        transport: Transport.TCP,
        options: {
          port: 4003,
        },
      },
    ]),
  ],
  controllers: [AppController, OrdersController],
  providers: [AppService],
})
export class AppModule { }
