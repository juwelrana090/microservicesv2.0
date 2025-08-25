import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('KAFKA_SERVICE') private readonly kafkaService: ClientKafka,
  ) { }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('order')
  createOrder(@Body() order: any) {
    this.kafkaService.emit('order-created', order);
    return {
      status: 'success',
      message: 'Order created successfully',
      data: order,
    };
  }
}
