import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern("order-created")
  sendOrderCreated(@Payload() order: any) {
    console.log('[Notification Service] Order created:', order);
    // Handle the order creation event
  }

  @MessagePattern("payment-success")
  sendPaymentSuccess(@Payload() payment: any) {
    console.log('[Notification Service] Payment successful:', payment);
    // Handle the payment success event
  }
}
