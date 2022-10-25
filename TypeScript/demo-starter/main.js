import { CategoryService } from "./services/categoryService.js";
import { ProductService } from "./services/productService.js";
var categoryService = new CategoryService();
categoryService.categoryAdd({ categoryId: 1, categoryName: "1.kategori" });
categoryService.categoryAdd({ categoryId: 2, categoryName: "2.kategori" });
categoryService.categoryAdd({ categoryId: 3, categoryName: "3.kategori" });
console.log(categoryService.getAll());
// categoryService.deleteCategory({ categoryId: 1, categoryName: "1.kategori" })
categoryService.getByCategoryId({ categoryId: 1, categoryName: "1.kategori" });
categoryService.getCategoryUpdate({ categoryId: 4, categoryName: "yeni kategori" });
console.log(categoryService.getAll());
var productService = new ProductService();
productService.add({ productId: 1, productName: "1.ürün" });
productService.add({ productId: 2, productName: "2.ürün" });
productService.add({ productId: 3, productName: "3.ürün" });
console.log(productService.getAllProduct());
// productService.deleteProduct({ productId: 1, productName: "1.ürün" })
productService.getByProductId({ productId: 1, productName: "1.ürün" });
productService.getProductUpdate({ productId: 1, productName: "yeni ürün" });
console.log(productService.getAllProduct());
