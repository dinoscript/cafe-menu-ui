import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { DishesComponent }      from './dishes/dishes.component';
import { DishDetailComponent }  from './dish-detail/dish-detail.component';
import { DishAddComponent }  from './dish-add/dish-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: DishDetailComponent },
  { path: 'dishes',     component: DishesComponent },
  { path: 'add',     component: DishAddComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
