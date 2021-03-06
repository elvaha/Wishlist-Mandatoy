import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';

import {AppComponent} from './app.component';
import {routes} from './app.routes';
import {WISHES_DECLARATIONS} from './wishes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        AccountsModule
    ],
    declarations: [
        AppComponent,
        WISHES_DECLARATIONS
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule{}