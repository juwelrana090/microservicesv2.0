import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { MICROSERVICES } from 'src/constants';

@Controller('orders')
export class OrdersController {

    constructor(
        @Inject(MICROSERVICES.PRODUCT_REDIS_CLIENT)
        private productRedisClient: ClientProxy
    ) { }


    @MessagePattern('create_order')
    createOrder(order: any) {
        console.log('Order received on the Orders microservice:', order);
        this.productRedisClient.emit('order.created', order);
        // return {
        //     message: 'Order created successfully',
        //     order,
        // };
        return this.productRedisClient.send('get_product', {});
    }
}
