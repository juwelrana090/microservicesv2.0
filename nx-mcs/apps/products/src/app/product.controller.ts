import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { ProductRequest, ProductResponse, ProductServiceController, ProductServiceControllerMethods } from 'types/proto/products';

@Controller('product')
@ProductServiceControllerMethods()
export class ProductController implements ProductServiceController {
  createProduct(request: ProductRequest): Promise<ProductResponse> | Observable<ProductResponse> | ProductResponse {
    return {
      productId: 0,
      name: '',
      description: '',
      price: 0,
    };
  }

  getProduct(request: ProductRequest): Promise<ProductResponse> | Observable<ProductResponse> | ProductResponse {
    return {
      productId: 12,
      name: 'Sample Product',
      description: 'This is a sample product.',
      price: 99.99,
    };
  }

}
