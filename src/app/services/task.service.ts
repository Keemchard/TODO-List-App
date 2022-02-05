import { Injectable } from '@angular/core';
import { TaskArray } from '../task-model';
import { TaskInterface } from '../task-interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTaskFromService(): TaskInterface[] {
    return TaskArray;
  }
}
