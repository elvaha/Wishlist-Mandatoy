import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import {Wishlists} from '../../../../both/collections/wishlists.collection';
import {Wishlist} from '../../../../both/models/wishlist.model';

import template from './wish-list-detail.component.html';

@Component({
    selector: 'wishlist-details',
    template
})
export class WishListDetailComponent{
    wishlistId : string;
    paramsSub : Subscription;
    wishlist : Wishlist;
    addForm : FormGroup;
    wishlists: Observable<Wishlist[]>;
    
    constructor(
        private route: ActivatedRoute,
        private formBuilder : FormBuilder
    ){}
    
    ngOnInit(){
        this.paramsSub = this.route.params
            .map(params => params['wishlistId'])
            .subscribe(wishlistId => {
                this.wishlistId = wishlistId
                this.wishlist = Wishlists.findOne(this.wishlistId);                        
            });
        
        this.addForm = this.formBuilder.group({
            wishName : ['', Validators.required],
            price : []
        });
    }
    
    addWish(): void{
        if(this.addForm.valid){
            Wishlists.update(this.wishlistId, {$push: {wishes : this.addForm.value}});
            
            this.addForm.reset();
        }
    }
    
    ngOnDestroy(){
        this.paramsSub.unsubscribe();
    }
}