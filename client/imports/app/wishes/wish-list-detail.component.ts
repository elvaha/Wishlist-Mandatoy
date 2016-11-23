import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import 'rxjs/add/operator/map';

import {Wishlists} from '../../../../both/collections/wishlists.collection';
import {Wishlist} from '../../../../both/models/wishlist.model';

import template from './wish-list-detail.component.html';

@Component({
    selector: 'wish-list-details',
    template
})
export class WishListDetailComponent{
    wishlistId : string;
    paramsSub : Subscription;
    wishlist : Wishlist;
    
    constructor(
        private route: ActivatedRoute
    ){}
    
    ngOnInit(){
        this.paramsSub = this.route.params
            .map(params => params['wishlistId'])
            .subscribe(wishlistId => {
                this.wishlistId = wishlistId
                this.wishlist = Wishlists.findOne(this.wishlistId);                        
            });
    }
    
    ngOnDestroy(){
        this.paramsSub.unsubscribe();
    }
}