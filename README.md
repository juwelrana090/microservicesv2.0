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

// nx project genater
nx g @nx/nest:app apps/api-gateway
nx g @nx/nest:app apps/products
nx g @nx/nest:app apps/users
nx g @nx/nest:app apps/orders
nx g @nx/nest:app apps/payment

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
