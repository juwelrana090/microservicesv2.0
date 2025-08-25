import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('KAFKA_SERVICE') private readonly kafkaService: ClientKafka,
  ) { }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern('order-created')
  handleOrderCreated(order: any) {
    console.log('Order created:', order);
    // Handle the order creation event

    // Simulate processing the order

    this.kafkaService.emit('processed-payment', order);
  }
}
