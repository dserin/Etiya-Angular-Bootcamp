var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [];
    }
    ProductService.prototype.add = function (product) {
        this.products.push(product);
    };
    ProductService.prototype.getAllProduct = function () {
        return this.products;
    };
    ProductService.prototype.deleteProduct = function (product) {
        this.products = this.products.filter(function (d) { return d.productName !== product['productName']; });
    };
    ProductService.prototype.getByProductId = function (product) {
        console.log("ürün idsine göre çağırma.", this.products.filter(function (p) { return p.productId === product['productId']; }));
    };
    ProductService.prototype.getProductUpdate = function (product) {
        var productIndex = this.products.findIndex(function (d) { return d.productId === product.productId; });
        this.products[productIndex] = product;
    };
    return ProductService;
}());
export { ProductService };
