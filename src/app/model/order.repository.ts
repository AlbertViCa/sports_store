import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Order} from "./order.model";
import {StaticDataSource} from "./static.datasource";

@Injectable()
export class OrderRepository {
    constructor(private dataSource: StaticDataSource) {}

    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }
}
