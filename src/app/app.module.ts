import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { FormTaskComponent } from './components/form-task/form-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { HomeComponent } from './components/home/home.component';
import { FunFactsComponent } from './components/fun-facts/fun-facts.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, QuoteFormComponent, NavbarComponent, 
    BodyComponent, FormTaskComponent, TaskListComponent, TaskItemComponent, 
    HomeComponent, FunFactsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
