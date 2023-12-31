import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";


@Injectable()
export class HelloWordInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Hello World!');
    const input = Date.now()
    const handler = next.handle()
    return handler.pipe(
      tap(() => console.log(`${Date.now() - input} ms`))
    )

  }
}
