import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertModule} from "ngx-bootstrap";

import { AppRoutingModule } from './todo-routing.module';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {AddTodoComponent} from "./add-todo/add-todo.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TodoFormComponent,
    TodoListComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [TodoFormComponent]
})
export class AppModule { }
