import {NgModule} from "@angular/core";
import {ProductRepository} from "./product.repository";
import {StaticDataSource} from "./static.datasource";
import { Cart } from "./cart.moldel";
import {Order} from "./order.model"
import {OrderRepository} from "./order.repository";
import {RestDataSource} from "./rest-data-source.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository, RestDataSource, AuthService]
})
export class ModelModule {
}
