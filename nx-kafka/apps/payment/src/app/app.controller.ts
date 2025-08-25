import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('KAFKA_SERVICE') private readonly kafkaService: ClientKafka,
  ) { }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern('processed-payment')
  processedPayment(@Payload() payment: any) {
    console.log('[Payment Service] Payment processed:', payment);
    // Handle the payment processing event
    this.kafkaService.emit('payment-success', payment);
  }

}
