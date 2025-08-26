import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {

  constructor(private jwtService: JwtService) { }

  login(credential: { username: string; password: string }) {
    // Handle login

    if (credential.username === 'admin' && credential.password === 'pass') {
      const payload = { sub: "123", username: credential.username, role: "admin" };
      const token = this.jwtService.sign(payload);
      return { "token": token };
    }

    throw new UnauthorizedException('Invalid credentials');
  }


  async validateToken(token: string) {
    try {
      const decoded = await this.jwtService.verifyAsync(token);
      return {
        valid: true,
        userId: decoded.sub,
        username: decoded.username,
        role: decoded.role,
      };

    } catch (err) {
      return { valid: false, reason: err.message };
    }
  }
}
