import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanListComponent } from './components/plan-list/plan-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AutofocusFixModule} from 'ngx-autofocus-fix';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FilterPipe } from './pipes/filter.pipe';
import { RegisterPageComponent } from './components/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanListComponent,
    FilterPipe,
    RegisterPageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AutofocusFixModule.forRoot(),
        FlashMessagesModule.forRoot(),
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
