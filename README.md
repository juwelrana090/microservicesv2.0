<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

```javascript

// Install NX
npx create-nx-workspace@latest nx-mcs

/* Next  */
// Install the Nest plugin for Nx
npm install -D @nx/nest
OR
npm add @nx/nest

OR
npx create-nx-workspace@latest --preset nest --name nx-mcs --appName api-gateway
npx create-nx-workspace@latest --preset nest --name nx-kafka --appName api-gateway
npx create-nx-workspace@latest --preset nest --name nx-auth --appName api-gateway
npx create-nx-workspace@latest --preset nest --name nx-rabbitMQ  --appName api-gateway
npx create-nx-workspace@latest --preset nest --name nx-prod  --appName auth

// nx project genater
// nx project genater
// nx project genater
nx g @nx/nest:app apps/api-gateway
nx g @nx/nest:app apps/products
nx g @nx/nest:app apps/users
nx g @nx/nest:app apps/auth

nx g @nx/nest:app apps/orders
nx g @nx/nest:app apps/payment
nx g @nx/nest:app apps/notification

// Run all apps
nx run-many -t serve --all

// Update nestjs
/* uninstall nestjs*/
npm uninstall @nestjs/common @nestjs/core @nestjs/platform-express @nestjs/testing

/* Inastall latest*/
npm i @nestjs/common@latest @nestjs/core@latest @nestjs/platform-express@latest @nestjs/testing@latest

/* Install microservices*/
npm install @nestjs/microservices

/* Next */
// gRPC implemant
/* Install gRPC */
npm i @grpc/grpc-js @grpc/proto-loader

/* install ts-proto*/
npm i ts-proto

/* protoc ts*/
npx protoc --ts_proto_out=./types/ ./proto/*.proto --ts_proto_opt=nestJs=true

/* controller create on products service*/
nx g @nx/nest:controller apps/products/src/app/product

/* controller create on api-gateway service*/
nx g @nx/nest:controller apps/api-gateway/src/app/product/product



```

# 1. Generate a shared library for proto types

nx generate @nrwl/node:library shared-proto --directory=libs --buildable=true

# 2. Move your types file

# From: types/proto/products.ts

# To: libs/shared-proto/src/lib/products.ts

# 3. Update the library's index.ts file

# File: libs/shared-proto/src/index.ts

# Content: export \* from './lib/products';

```javascript
// Instead of this:
// import { PRODUCTS_PACKAGE_NAME } from './../../../types/proto/products';

// Use this:
import { PRODUCTS_PACKAGE_NAME } from '@nx-mcs/shared-proto';

// Update in all files:
// - apps/api-gateway/src/app/app.module.ts
// - apps/api-gateway/src/app/product/product.controller.ts
// - apps/products/src/app/product.controller.ts
// - apps/products/src/main.ts (your bootstrap file)


// In apps/api-gateway/project.json
{
  "name": "api-gateway",
  // ... other config
  "implicitDependencies": ["shared-proto"],
  "targets": {
    // ... your targets
  }
}

// In apps/products/project.json
{
  "name": "products",
  // ... other config
  "implicitDependencies": ["shared-proto"],
  "targets": {
    // ... your targets
  }
}




// In tsconfig.base.json (root of your workspace)
{
  "compileOnSave": false,
  "compilerOptions": {
    "rootDir": ".",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "es2015",
    "module": "esnext",
    "lib": ["es2020", "dom"],
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@nx-mcs/shared-proto": ["libs/shared-proto/src/index.ts"],
      // Or if keeping the original structure:
      "@types/proto/*": ["types/proto/*"]
    }
  },
  "exclude": ["node_modules", "tmp"]
}
```

The issue is that your Nx monorepo is trying to import from relative paths that don't exist during the build process. You're getting webpack errors because multiple apps/services are trying to import from `'./../../../types/proto/products'` but the path resolution is failing.

Here are the proper solutions for an Nx monorepo:

## Solution 1: Create a Shared Library (Recommended)## Solution 2: Update Your Import Statements

After creating the shared library, update all your imports:## Solution 3: Update Your Project Dependencies

Add the shared library as a dependency in your project's `project.json` files:## Solution 4: Alternative - Update tsconfig.json Paths

If you prefer not to create a shared library, you can fix the paths in your `tsconfig.base.json`:## Quick Fix Steps:

# Option 1: Using @nx/node (if installed)

nx generate @nx/node:library shared-proto --directory=libs --buildable=true

# Option 2: Using @nx/js (more common for shared libraries)

nx generate @nx/js:library shared-proto --directory=libs --buildable=true

# Option 3: Generic library generator (works in most Nx versions)

nx generate library shared-proto --directory=libs --buildable=true

# Option 4: Install the plugin first, then generate

npm install --save-dev @nx/node

# or

yarn add --dev @nx/node

# then run:

nx generate @nx/node:library shared-proto --directory=libs --buildable=true

1. **Create the shared library**:

   ```bash
   nx generate @nrwl/node:library shared-proto --directory=libs --buildable=true
   ```

2. **Move your types file**:

   ```bash
   mv types/proto/products.ts libs/shared-proto/src/lib/products.ts
   ```

3. **Update the library index file** (`libs/shared-proto/src/index.ts`):

   ```typescript
   export * from "./lib/products";
   ```

4. **Replace all imports** in your controllers and modules:

   ```typescript
   // OLD
   import { PRODUCTS_PACKAGE_NAME } from "./../../../types/proto/products";

   // NEW
   import { PRODUCTS_PACKAGE_NAME } from "@nx-mcs/shared-proto";
   ```

5. **Build again**:
   ```bash
   nx build api-gateway
   nx build products
   ```

This approach follows Nx best practices and ensures your shared types are properly managed across your microservices architecture.

### Node Package Update

```bash
npm i -g ncu
```

### nest Auth

```bash
# First go api-gateway directory
cd apps/api-gateway
# Create controller
nest g co app/auth --no-spec

npm i @nestjs/jwt

# Guards set api-gateway
nest g gu guards/auth --no-spec

```

## Intra Service Authentication In NestJS Microservices: How Services Should Trust Each Other

- https://youtu.be/9KZEaT-A9zs?list=PLhnVDNT5zYN-wg3QxqmlYs2mBwCn7v59D

### How to set mTLS

- Create a directory -> name : certs in project root directory
- openssl to generate ca.key file

```bash
openssl genrsa -out certs/ca.key 4096
```

- openssl to root crt generate

```bash
cd certs
openssl req -x509 -new -nodes -key ca.key -sha256 -days 365 -out ca.crt -subj "/CN=myCA"
```

- openssl to server privet key generate

```bash
openssl genrsa -out server.key 4096
```

- openssl to server.csr generate

```bash
cd certs
openssl req -new -key server.key -out server.csr -subj "/CN=localhost"

openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 365 -sha256

```

- openssl to client privet key generate

```bash
openssl genrsa -out client.key 4096
```

- openssl to client.csr generate

```bash
cd certs
openssl req -new -key client.key -out client.csr -subj "/CN=client"

openssl x509 -req -in client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out client.crt -days 365 -sha256

```

### Now update user service

```javascript
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { readFileSync } from "fs";
import { request } from "http";

async function bootstrap() {
  const app =
    (await NestFactory.createMicroservice) <
    MicroserviceOptions >
    (AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: "localhost",
        port: 8878,
        tlsOptions: {
          key: readFileSync("./certs/server.key"),
          cert: readFileSync("./certs/server.crt"),
          ca: readFileSync("./certs/ca.crt"),
          requestCert: true,
          rejectUnauthorized: true,
        },
      },
    });

  await app.listen();
  Logger.log(`🚀 User Service is running on  TCP port 8878`);
}

bootstrap();
```

### Update nx.json

```javascript
{
  "$schema": "./node_modules/nx/schemas/nx-schema.json",
  "defaultBase": "master",
  "namedInputs": {
    "default": [
      "{projectRoot}/**/*",
      "sharedGlobals"
    ],
    "production": [
      "default",
      "!{projectRoot}/.eslintrc.json",
      "!{projectRoot}/eslint.config.mjs",
      "!{projectRoot}/**/?(*.)+(spec|test).[jt]s?(x)?(.snap)",
      "!{projectRoot}/tsconfig.spec.json",
      "!{projectRoot}/jest.config.[jt]s",
      "!{projectRoot}/src/test-setup.[jt]s",
      "!{projectRoot}/test-setup.[jt]s"
    ],
    "sharedGlobals": [
      "{workspaceRoot}/.github/workflows/ci.yml"
    ]
  },
  "nxCloudId": "68ad5250b600e505f538bab4",
  "plugins": [
    {
      "plugin": "@nx/webpack/plugin",
      "options": {
        "buildTargetName": "build",
        "serveTargetName": "serve",
        "previewTargetName": "preview",
        "buildDepsTargetName": "build-deps",
        "watchDepsTargetName": "watch-deps",
        "serveStaticTargetName": "serve-static"
      }
    },
    {
      "plugin": "@nx/eslint/plugin",
      "options": {
        "targetName": "lint"
      }
    },
    {
      "plugin": "@nx/jest/plugin",
      "options": {
        "targetName": "test"
      },
      "exclude": [
        "apps/api-gateway-e2e/**/*",
        "apps/auth-e2e/**/*",
        "apps/users-e2e/**/*"
      ]
    }
  ],
  "targetDefaults": {
    "build": {
      "options": {
        "assets": [
          {
            "glob": "*",
            "input": "certs",
            "output": "certs"
          }
        ]
      }
    }
  }
}

```

### RabbitMQ install with microservices

```bash
npm install @nestjs/microservices

npm install amqplib
npm install --save @types/amqplib amqplib amqp-connection-manager


nx g @nx/nest:app apps/orders
nx g @nx/nest:app apps/payment
nx g @nx/nest:app apps/notification



```

A new **NestJS service** in your Nx monorepo **without generating the extra `-e2e` test project**.

By default, when you run:

```bash
nx g @nx/nest:app apps/products
```

👉 Nx creates two things:

- `apps/products/` → your NestJS service
- `apps/products-e2e/` → the end-to-end (e2e) test project

---

## 🔹 How to Skip E2E When Generating a Service

Use the `--e2eTestRunner=none` flag:

```bash
nx g @nx/nest:app products --e2eTestRunner=none
```

This will only create:

```
apps/
   products/
```

✅ No `products-e2e` folder.

---

## 🔹 Extra Options You Might Use

- Specify a directory:

  ```bash
  nx g @nx/nest:app products --directory=apps --e2eTestRunner=none
  ```

- Use **pnpm** or **yarn** workspace setup, Nx will handle dependencies.

---

## 🔹 If You Already Created With E2E

You can just delete the folder + config:

```bash
rm -rf apps/products-e2e
```

and remove its reference from `workspace.json` or `project.json` if it exists.

---

👉 Do you want me to also show you how to **generate a NestJS library (like shared utils)** inside Nx without e2e (only reusable code, no tests)?

Ah, I see 🙂 You’re asking about the **priority of E2E testing** — whether it should be considered **low, medium, or high** in a real Nx + NestJS microservice project.

Here’s the breakdown:

---

## 🔹 E2E Priority in Projects

| Priority      | When it applies                                                                                                                                                                                                                           | Why                                                                                                                                                                |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **High** 🚀   | - Critical production apps (fintech, healthcare, e-commerce checkout, authentication, payments)<br>- Multiple microservices (API Gateway + services) that must integrate correctly<br>- CI/CD pipelines where regressions are very costly | E2E tests ensure that the **entire workflow works as expected**. They catch issues unit tests miss (e.g., misconfigured routes, DB connection issues, auth flows). |
| **Medium** ⚖️ | - Mid-size apps where unit + integration tests already exist<br>- Internal tools where downtime is tolerable<br>- APIs that change often                                                                                                  | E2E tests are useful for key user flows, but you don’t need to cover every edge case.                                                                              |
| **Low** 🐢    | - Small apps, prototypes, or internal demos<br>- Projects with short lifespans<br>- When you rely mainly on **unit tests** and **manual QA**                                                                                              | Full E2E test suites may be **too heavy/slow** for rapid prototyping.                                                                                              |

---

## 🔹 In Nx Monorepo Context

- **Unit tests** (fast) → check functions, services, controllers.
- **Integration tests** (medium) → check service + DB + cache work.
- **E2E tests** (slow but powerful) → check the **whole app flow** from start to finish.

👉 That’s why Nx creates `apps/*-e2e` by default: it assumes **E2E is important** in modern microservices.

---

## 🔹 Best Practice

- Keep **unit tests = high priority** (fast, reliable).
- Keep **E2E = high priority for core flows** (login, checkout, order creation, etc.).
- Use **CI/CD** to run E2E before deploying to Kubernetes (catch bugs before production).

---

✅ So the short answer:

- **E2E priority = HIGH** for production-grade Nx/NestJS microservices.
- But you can downgrade to **medium/low** if it’s just prototypes or internal tools.

---

👉 Do you want me to show you a **minimal E2E setup (supertest) that runs fast** so it doesn’t slow down your GitHub Actions pipeline?
