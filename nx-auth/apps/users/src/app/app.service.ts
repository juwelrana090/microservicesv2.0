import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private users = [
    { id: '123', username: 'john', email: 'john@example.com' },
  ];

  getUserProfile(userId: string) {
    return this.users.find(user => user.id === userId);
  }
}
