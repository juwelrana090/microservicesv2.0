import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NOTIFICATION_CLIENT } from '../constants';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([
    {
      name: NOTIFICATION_CLIENT,
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL || 'amqp://guest:guest@localhost:5672'],
        queue: 'notification_queue',
        queueOptions: {
          durable: true,
        }
      }
    }
  ]),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
