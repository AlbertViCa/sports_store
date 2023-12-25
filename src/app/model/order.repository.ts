import {Injectable, signal} from "@angular/core";
import {Observable} from "rxjs";
import {Order} from "./order.model";
import {RestDataSource} from "./rest-data-source.service";

@Injectable()
export class OrderRepository {
    private ordersSignal = signal<Order[]>([]);
    private loaded: boolean = false;

    constructor(private dataSource: RestDataSource) {}

    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders()
            .subscribe(orders => this.ordersSignal.set(orders));
    }

    get orders(): Order[] {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.ordersSignal();
    }

    saveOrder(order: Order): Observable<Order> {
        this.loaded = false;
        return this.dataSource.saveOrder(order);
    }

    updateOrder(order: Order) {
        this.loaded = false;
        this.dataSource.updateOrder(order).subscribe(order => {
            this.ordersSignal.mutate(orders => {
                orders.splice(orders.findIndex(o => o.id == order.id), 1, order);
            });
        });
    }
    deleteOrder(id: number) {
        this.loaded = false;
        this.dataSource.deleteOrder(id).subscribe(order => {
            this.ordersSignal.mutate(orders => {
                orders.splice(orders.findIndex(o => o.id == id), 1);
            });
        });
    }
}
