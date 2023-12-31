import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable, delay, of } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return of(true)
      .pipe(
        delay(2000)
      );
  }
}
