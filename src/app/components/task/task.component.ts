import { Component, OnInit } from '@angular/core';
import { TaskArray } from 'src/app/task-model';
import { TaskInterface } from 'src/app/task-interface';
import { TaskKoService } from 'src/app/services/task-ko.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  taskVariable: TaskInterface[] = [];

  constructor(private taskServiceObj: TaskKoService) {}

  ngOnInit(): void {
    this.taskServiceObj
      .getTasksko()
      .subscribe((taskV) => (this.taskVariable = taskV));
  }

  deleteTask(task: TaskInterface) {
    this.taskServiceObj
      .deleteTaskFromService(task)
      .subscribe(
        () =>
          (this.taskVariable = this.taskVariable.filter(
            (t) => t.id !== task.id
          ))
      );
  }

  AddTask(task: TaskInterface) {
    this.taskServiceObj
      .addTaskFromService(task)
      .subscribe((t) => this.taskVariable.push(task));
    document.location.reload();
  }

  // toggleUpdateForm() {
  //   let updateCon: HTMLDivElement = document.querySelector('.update-con');
  //   updateCon.style.display = 'flex';
  // }

  updateText: string;
  updateDay: string;
  updateReminder: boolean;
  updateTask(task: TaskInterface) {
    // let textInput: HTMLInputElement = document.querySelector('#text');
    // let dayInput: HTMLInputElement = document.querySelector('#day');
    // let redminderInput: HTMLInputElement = document.querySelector('#text');
    // console.log(task);
    task.text = this.updateText;
    task.day = this.updateDay;
    task.reminder = this.updateReminder;

    this.taskServiceObj.updateTaskFromService(task).subscribe();
  }
}
