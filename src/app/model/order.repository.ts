import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Order} from "./order.model";
import {RestDatasource} from "./rest.datasource";

@Injectable()
export class OrderRepository {
    constructor(private dataSource: RestDatasource) {}

    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }
}
