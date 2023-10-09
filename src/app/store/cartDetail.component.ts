import {Component} from "@angular/core";
import {Cart} from "../model/cart.moldel";

@Component({
    templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent {
    constructor(public cart: Cart) {}
}
