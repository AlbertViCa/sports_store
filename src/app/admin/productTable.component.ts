import {Component, IterableDiffer, IterableDiffers, ViewChild} from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { MatPaginator } from '@angular/material/paginator';

@Component({
    selector: 'app-product-table',
    templateUrl: 'productTable.component.html'
})
export class ProductTableComponent {
    colsAndRows: string[] = ['id', 'name', 'category', 'price', 'buttons'];
    dataSource = new MatTableDataSource<Product>(this.repository.products());
    differ: IterableDiffer<Product>;

    constructor(private repository: ProductRepository, private differs: IterableDiffers) {
        this.differ = differs.find(this.repository.products()).create();
    }

    ngDoCheck() {
        let changes = this.differ?.diff(this.repository.products());
        if (changes) {
            this.dataSource = new MatTableDataSource<Product>(this.repository.products());
        }
    }

    deleteProduct(id: number) {
        this.repository.deleteProduct(id);
    }

    @ViewChild(MatPaginator) paginator?: MatPaginator;
    ngAfterViewInit() {
        if (this.paginator){
            this.dataSource.paginator = this.paginator!;
        }
    }
}
