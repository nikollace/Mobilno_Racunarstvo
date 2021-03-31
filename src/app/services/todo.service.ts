import { Task } from "../models/Task";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class JustService {
    tasks: Task[] = [
        new Task('t2', 'Softverski paterni', '23 GOF patterns', 'High', '21.03.2021'),
        new Task('t3', 'Projektovanje softvera', 'MVC pattern', 'Low', '23.03.2021')
        ];

    editClicked: boolean = false;

    title: string = '';
    description: string = '';
    priority: string = '';

    addTask(task: Task) {
        this.tasks.push(task);
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    deleteTask(taskId: string) {
        var taskIndex = this.tasks.findIndex(task => task.id === taskId);
        this.tasks.splice(taskIndex, 1);
    }

    editTask(taskId: string, title: string, description: string, priority: string){
        var task = this.tasks.find(task => task.id === taskId);
        if(task) {
            task.title = title;
            task.description = description;
            task.priority = priority;
            task.editClicked = false;

            this.title = title;
            this.description = description;
            this.priority = priority;
            //this.editClicked = true;
        }
    }
}