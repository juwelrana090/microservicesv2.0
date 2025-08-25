import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
    @MessagePattern('get_user')
    getUser(id: string) {
        return {
            id,
            name: 'User Name',
            email: 'user@example.com',
        };
    }
}
