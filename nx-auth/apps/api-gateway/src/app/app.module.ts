import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from './user/user.controller';
import { readFileSync } from 'fs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH-SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 8877,
        },
      }, {
        name: 'USER-SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 8878,
          tlsOptions: {
            key: readFileSync('./certs/client.key'),
            cert: readFileSync('./certs/client.crt'),
            ca: readFileSync('./certs/ca.crt'),
            requestCert: true,
            rejectUnauthorized: true,
          }
        },
      },
    ]),
  ],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService],
})
export class AppModule { }
