import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanListComponent } from './components/plan-list/plan-list.component';
import {FormsModule} from '@angular/forms';
import {AutofocusFixModule} from 'ngx-autofocus-fix';

@NgModule({
  declarations: [
    AppComponent,
    PlanListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutofocusFixModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
