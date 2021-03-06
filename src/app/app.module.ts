import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DishesComponent }      from './dishes/dishes.component';
import { DishDetailComponent }  from './dish-detail/dish-detail.component';
import { DishService }          from './services/dish.service';
import { DishSearchComponent }  from './dish-search/dish-search.component';
import { DishAddComponent }     from './dish-add/dish-add.component';
import { SearchPipe }           from './pipes/search.pipe';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdDatepickerModule, MdNativeDateModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    ReactiveFormsModule, // <-- #2 add to @NgModule imports
    BrowserAnimationsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdInputModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DishDetailComponent,
    DishesComponent,
    DishSearchComponent,
    DishAddComponent,
    SearchPipe
  ],
  providers: [ DishService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
