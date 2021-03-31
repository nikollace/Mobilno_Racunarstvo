import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from '../../models/Task';
import { JustService } from '../../services/todo.service';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {

  constructor(private todoService: JustService, private route: ActivatedRoute) {
  }

  tasks: Task[] = this.todoService.tasks;

  id= '';
  title= '';
  description= '';
  priority= '';
  editClicked = false;

  ngOnInit(): void {
    this.title = this.route.snapshot.queryParams.title;
    this.description = this.route.snapshot.queryParams.description;
    this.priority = this.route.snapshot.queryParams.priority;
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.id = queryParams.id;
      this.title = queryParams.title;
      this.description = queryParams.description;
      this.priority = queryParams.priority;
      this.editClicked = this.todoService.editClicked;
    })
  }

  createdAt = '';
  emptyValues = false;
  emptyy = false;

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
        var id = 't' + Math.round(Math.random()*100000);
        console.log(id);
        var newTask = new Task(id, this.title, this.description, this.priority, this.createdAt);
        var title = this.tasks.find(task => task.title === this.title);
        if (title) {
          alert('Task with that title already exist! Please add a new one.');
        } else {
          this.todoService.addTask(newTask);
          this.emptyValues = true;
          this.clearInputs();
        }
      }
    }
  }

  onEditTask(): void {
    this.todoService.editTask(this.id, this.title, this.description, this.priority);
    this.editClicked = false;
  }
}