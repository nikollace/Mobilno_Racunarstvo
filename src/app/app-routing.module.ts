import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTaskComponent } from './components/form-task/form-task.component';
import { FunFactsComponent } from './components/fun-facts/fun-facts.component';
import { HomeComponent } from './components/home/home.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tasks', component: TaskListComponent, 
  children: [
      {path: 'new', component: FormTaskComponent},
      {path: ':id/edit', component: FormTaskComponent}
  ]},
  {path: 'fun-facts', component: FunFactsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
