import {Injectable, Signal, computed} from "@angular/core";
import {Product} from "./product.model";
import {RestDatasource} from "./rest.datasource";
import {toSignal} from "@angular/core/rxjs-interop";

@Injectable()
export class ProductRepository {
    products: Signal<Product[]>;
    categories: Signal<string[]>

    constructor(private dataSource: RestDatasource) {
        this.products = toSignal(dataSource.products, {initialValue: []});
        this.categories = computed(() => {
            return this.products()
                .map(p => p.category ?? "(None)")
                .filter((c, index, array) =>
                    array.indexOf(c) == index).sort();
        })
    }

    getProduct(id: number): Product | undefined {
        return this.products().find(p => p.id == id);
    }
}
