import { Category} from "../model/category"

export class CategoryService {
	private categories: Category[] = [];

	categoryAdd(category: Category) {
		this.categories.push(category);
	}

	getAll(): Category[] {
		return this.categories;
    }
    deleteCategory(category: Category) {
    this.categories=this.categories.filter(d =>  d.categoryName !== category['categoryName']);
    }
   
    getByCategoryId(category: Category) {
       console.log("kategori idsine göre çağırma.",this.categories.filter(p => p.categoryId ===category['categoryId'] ));
    } 

    getCategoryUpdate(category: Category) {
    let categoryIndex = this.categories.findIndex(d => d.categoryId === category.categoryId)
    this.categories[categoryIndex]=category
    }

    }




