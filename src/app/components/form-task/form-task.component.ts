import { Component } from '@angular/core';
import { Task } from './task';


@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent {
  tasks: any[] = [];

  title = '';
  description = '';
  priority = '';
  createdAt = '';

  emptyValues = false;
  emptyy = false;

  empty(): void {
    if (this.title === '') {
      this.title = 'Title shouldn\'t be empty!';
      this.emptyy = true;
    }
    if (this.description === '') {
      this.description = 'Description shouldn\'t be empty!';
      this.emptyy = true;
    }
    if (this.priority === '') {
      this.priority = 'Priority shouldn\'t be empty!';
      this.emptyy = true;
    }
  }

  preconditions(): boolean {
    if (this.title === '' || this.description === '' || this.priority === '') {
      return false;
    }
    return true;
  }

  setEmptyValues(): void {
    this.emptyValues = false;
  }

  clearInputs(): void {
    this.title = '';
    this.description = '';
    this.priority = '';
    this.createdAt = '';
    setTimeout(() => this.setEmptyValues(), 3000);
  }

  checkAgain(): boolean {
    if (this.title === 'Title shouldn\'t be empty!' || this.description === 'Description shouldn\'t be empty!' || this.priority === 'Priority shouldn\'t be empty!') {
      return false;
    }
    return true;
  }

  onAddTask(): void {
    this.empty();
    if (this.emptyy) {
      setTimeout(() => this.clearInputs(), 2000);
    }
    if (this.preconditions()) {
      if (this.checkAgain()) {
        this.createdAt = new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear() + ".";
        var newTask = new Task(this.title, this.description, this.priority, this.createdAt);
        var title = this.tasks.find(task => task.title === this.title);
        if (title) {
          alert('Task with that title already exist! Please add a new one.');
        } else {
          this.tasks.push(newTask);
          this.emptyValues = true;
          this.clearInputs();
        }
      }
    }
  }

  find(id: Date): any {
    var task = this.tasks.find(task => task.id === id);
    return task;
  }

  saveTask(id: Date): void {
    var task = this.find(id);
    task.title = this.title;
    task.description = this.description;
    task.priority = this.priority;

    task.editClicked = false;

    this.clearInputs();
  }

  onEditTask(id: Date): void {
    var task = this.find(id);
    this.title = task.title;
    this.description = task.description;
    this.priority = task.priority;

    task.editClicked = true;
  }

  onDeleteTask(id: Date): void {
    var taskIndex = this.tasks.findIndex(task => task.id === id);
    this.tasks.splice(taskIndex, 1);
  }
}
