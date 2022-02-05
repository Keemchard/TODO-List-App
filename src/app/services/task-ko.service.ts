import { Injectable } from '@angular/core';
import { TaskArray } from '../task-model';
import { TaskInterface } from '../task-interface';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TaskKoService {
  private apiUrl = 'http://localhost:5000/task';
  constructor(private http: HttpClient) {}

  getTasksko(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(this.apiUrl);
  }

  deleteTaskFromService(task: TaskInterface): Observable<TaskInterface> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<TaskInterface>(url);
  }

  addTaskFromService(taskToBeAdded: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(
      this.apiUrl,
      taskToBeAdded,
      httpOptions
    );
  }

  updateTaskFromService(task: TaskInterface): Observable<TaskInterface> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<TaskInterface>(url, task, httpOptions);
  }
}
