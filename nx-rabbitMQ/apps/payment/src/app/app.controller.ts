import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { NOTIFICATION_CLIENT } from '../constants';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(NOTIFICATION_CLIENT)
    private readonly notificationRMQClient: ClientProxy,
  ) { }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern("payment-process")
  handlePaymentProcess(@Payload() order: any) {
    console.log("Payment process:", order);

    this.notificationRMQClient.emit("payment-success", order);
  }
}
