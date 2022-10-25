var CategoryService = /** @class */ (function () {
    function CategoryService() {
        this.categories = [];
    }
    CategoryService.prototype.categoryAdd = function (category) {
        this.categories.push(category);
    };
    CategoryService.prototype.getAll = function () {
        return this.categories;
    };
    CategoryService.prototype.deleteCategory = function (category) {
        this.categories = this.categories.filter(function (d) { return d.categoryName !== category['categoryName']; });
    };
    CategoryService.prototype.getByCategoryId = function (category) {
        console.log("kategori idsine göre çağırma.", this.categories.filter(function (p) { return p.categoryId === category['categoryId']; }));
    };
    CategoryService.prototype.getCategoryUpdate = function (category) {
        var categoryIndex = this.categories.findIndex(function (d) { return d.categoryId === category.categoryId; });
        this.categories[categoryIndex] = category;
    };
    return CategoryService;
}());
export { CategoryService };
