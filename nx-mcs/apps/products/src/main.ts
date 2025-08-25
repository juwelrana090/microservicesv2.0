/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

// Option 1: Define locally (replace with actual package name)
const PRODUCTS_PACKAGE_NAME = 'products';

// Option 2: If you can move the types file to src/types/proto/products.ts
// import { PRODUCTS_PACKAGE_NAME } from './types/proto/products';

async function bootstrap() {
  const port = process.env.PORT || 5000;

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: PRODUCTS_PACKAGE_NAME,
        protoPath: join(__dirname, './proto/products.proto'),
        url: `0.0.0.0:${port}`, // gRPC URL format
      },
    },
  );

  await app.listen();
  Logger.log(`🚀 Products microservice is running on port ${port}`);
}

bootstrap();