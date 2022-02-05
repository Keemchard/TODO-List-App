import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from 'src/app/task-interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  //////-----------REACTIVE FORM START----------////////

  // theText = new FormControl(''); //pag wala sa loob ng FormGroup

  theTasks = new FormGroup({
    theText: new FormControl(''),
    theDay: new FormControl(''),
    theReminder: new FormControl(''),
  });
  //haahhaha it's a dragggg
  //////-----------REACTIVE FORM END----------////////
  @Output() onAddTask: EventEmitter<TaskInterface> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {
    let mainFormCon: HTMLDivElement = document.querySelector('.main-form-con');
    let exitFormBtn: HTMLButtonElement = document.querySelector('.exit-form');
    exitFormBtn.addEventListener('click', function () {
      mainFormCon.style.display = 'none';
    });
  }

  onSubmit() {
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
