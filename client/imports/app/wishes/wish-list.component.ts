import {Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {Wishlists} from '../../../../both/collections/wishlists.collection';
import {Wishlist} from '../../../../both/models/wishlist.model';

import template from './wish-list.component.html';

@Component({
    selector: 'wishes-list',
    template
})

export class WishListComponent{
    wishlists: Observable<Wishlist[]>;
    
    constructor(){
        this.wishlists = Wishlists.find({}).zone();
    }
    
    removeWishlist(wish: Wishlist): void {
        Wishlists.remove(wish._id);
    }
}