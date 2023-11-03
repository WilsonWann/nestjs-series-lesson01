import { Injectable } from '@nestjs/common';
import { Todo } from './common/models/todos.model';
import { Observable, map } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(
    private readonly http: HttpService,
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  getTodos(): Observable<Todo> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        map(res => res.data)
      )
  }
}
