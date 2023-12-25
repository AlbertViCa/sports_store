import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from './app.component';
import {StoreModule} from "./store/store.module";

import {StoreComponent} from "./store/store.component";
import {CheckoutComponent} from "./store/checkout.component";
import {CartDetailComponent} from "./store/cartDetail.component";
import {RouterModule} from "@angular/router";
import {StoreFirstGuard} from "../storeFirst.guard";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        StoreModule,
        RouterModule.forRoot([
            {
                path: "store", component: StoreComponent,
                canActivate: [StoreFirstGuard]
            },
            {
                path: "cart", component: CartDetailComponent,
                canActivate: [StoreFirstGuard]
            },
            {
                path: "checkout", component: CheckoutComponent,
                canActivate: [StoreFirstGuard]
            },
            {
                path: "admin",
                loadChildren: () => import("./admin/admin.module")
                    .then(m => m.AdminModule),
                canActivate: [StoreFirstGuard]
            },
            {path: "**", redirectTo: "/store"},
        ])
    ],
    providers: [StoreFirstGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
