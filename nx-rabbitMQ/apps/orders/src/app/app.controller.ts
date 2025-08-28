import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { ORDER_SERVICE_RABBITMQ } from '../constants';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(ORDER_SERVICE_RABBITMQ.PAYMENT_CLIENT) private readonly paymentRMQClient: ClientProxy,
    @Inject(ORDER_SERVICE_RABBITMQ.NOTIFICATION_CLIENT) private readonly notificationRMQClient: ClientProxy,
  ) { }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern("order-created")
  handleOrderCreated(@Payload() order: any) {
    console.log("Order created:", order);

    this.paymentRMQClient.emit("payment-process", order);
    this.notificationRMQClient.emit("order-created", order);

  }


}
