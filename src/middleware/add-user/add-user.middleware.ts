import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AddUserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.user = { name: 'Wilson Wan', roles: ['guest'] };
    next();
  }
}
