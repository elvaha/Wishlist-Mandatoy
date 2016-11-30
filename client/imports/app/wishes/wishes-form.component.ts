import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Meteor } from 'meteor/meteor';

import {Wishlists} from '../../../../both/collections/wishlists.collection';

import template from './wishes-form.component.html';

@Component({
    selector : 'wishes-form',
    template
})

export class WishlistFormComponent implements OnInit {
    addForm : FormGroup;
    
    constructor(
    private formBuilder : FormBuilder
    ){}
    
    ngOnInit(){
        this.addForm = this.formBuilder.group({
            name : ['', Validators.required],
            description : [],
            wishes : []
        });
    }
    
    addWishlist(): void{
        
        if(!Meteor.userId){
            alert('Please login to add wishlist');
            return;
        }
        
        if(this.addForm.valid){
            Wishlists.insert(Object.assign({}, this.addForm.value, { owner: Meteor.userId() }));
            
            this.addForm.reset();
        }
    }
}