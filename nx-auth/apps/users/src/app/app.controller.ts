import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern("get-user-profile")
  getUserProfile(data: { userId: string }) {
    return this.appService.getUserProfile(data.userId);
  }
}
