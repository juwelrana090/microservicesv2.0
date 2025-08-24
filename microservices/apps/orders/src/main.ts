import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      host: process.env.MICROSERVICE_HOST ?? 'localhost',
      port: process.env.MICROSERVICE_PORT ? parseInt(process.env.MICROSERVICE_PORT, 10) : 4001,
    },
  });
  await app.listen();
  console.log(`Microservice is listening on ${process.env.MICROSERVICE_HOST ?? 'localhost'}:${process.env.MICROSERVICE_PORT ? parseInt(process.env.MICROSERVICE_PORT, 10) : 4001}`);
}
bootstrap();
