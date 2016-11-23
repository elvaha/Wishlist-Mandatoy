import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

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
        });
    }
    
    addWishlist(): void{
        if(this.addForm.valid){
            Wishlists.insert(this.addForm.value);
            
            this.addForm.reset();
        }
    }
}