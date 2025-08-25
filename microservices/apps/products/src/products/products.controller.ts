import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {

    @MessagePattern('get_product')
    getProduct(id: string) {
        return {
            id,
            name: 'Product Name',
            description: 'Product Description',
            price: 100,
        };
    }

    // Redis Event 
    @EventPattern('order.created')
    async updateStock(order: { id: number; productId: number; }) {
        // Logic to update stock based on the order details
        console.log(`Updating stock for product ${order.productId} due to order ${order.id}`);

        console.log("Stock updated successfully");
    }
}
