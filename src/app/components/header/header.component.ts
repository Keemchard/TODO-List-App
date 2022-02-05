import { Component, OnInit } from '@angular/core';
// import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  appTitle: string = 'Task Tracker';

  constructor() {}

  ngOnInit(): void {
    //here i can took the class name (.main-form-con) of the other component which is the add-task
    //and create a variable from it and modify its style using DOM
    //so i just want to say that it is possible :)
    //tooking other class name from other component and modify it in other ts component file
    //just like what i did below
    let mainFormCon: HTMLDivElement = document.querySelector('.main-form-con');

    let appBtn: HTMLButtonElement = document.querySelector('.app-button');
    //the appBTn var which holds the .app-button class is basically a class from this component,
    //not from other component
    appBtn.addEventListener('click', function () {
      mainFormCon.style.padding = '20px';
      mainFormCon.style.transition = '1s';
      mainFormCon.style.backgroundColor = 'red';
      mainFormCon.style.display = 'block';
    });
  }

  addBtnClick() {
    alert('hey asdasd');
  }
}
