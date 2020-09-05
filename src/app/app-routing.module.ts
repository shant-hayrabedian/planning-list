import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlanListComponent} from './components/plan-list/plan-list.component';
import {RegisterPageComponent} from './components/register-page/register-page.component';


const routes: Routes = [
  { path: 'register', component: RegisterPageComponent },
  { path: '',   redirectTo: '/register', pathMatch: 'full' },
  { path: 'plan-list', component: PlanListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
