import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

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
}
