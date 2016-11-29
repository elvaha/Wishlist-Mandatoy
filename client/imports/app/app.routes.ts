import {Route} from '@angular/router';

import {WishListComponent} from './wishes/wish-list.component';
import {WishListDetailComponent} from './wishes/wish-list-detail.component';

export const routes: Route[] = [
    {path : '', component : WishListComponent},
    {path : 'wishlist-detail/:wishlistId', component : WishListDetailComponent}
];