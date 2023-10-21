import {NgModule} from "@angular/core";
import {ProductRepository} from "./product.repository";
import {StaticDataSource} from "./static.datasource";
import { Cart } from "./cart.moldel";
import {Order} from "./order.model"
import {OrderRepository} from "./order.repository";
import {RestDatasource} from "./rest.datasource";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository, RestDatasource]
})
export class ModelModule {
}
