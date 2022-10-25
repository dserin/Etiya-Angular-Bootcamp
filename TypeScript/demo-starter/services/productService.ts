import { Product } from "../model/product";

export class ProductService {
	private products: Product[] = [];

	add(product: Product) {
		this.products.push(product);
	}

	getAllProduct(): Product[] {
		return this.products;
    }
    

    deleteProduct(product: Product) {
    this.products=this.products.filter(d =>  d.productName !== product['productName']);
    }
   
    getByProductId(product: Product) {
       console.log("ürün idsine göre çağırma.",this.products.filter(p => p.productId ===product['productId'] ));
    } 

    getProductUpdate(product: Product) {
    let productIndex = this.products.findIndex(d => d.productId === product.productId)
    this.products[productIndex]=product
    }

    }

