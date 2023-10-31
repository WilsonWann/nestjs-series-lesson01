import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TestModule } from './test/test.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filter/http-exception/http-exception.filter';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { HelloWorldMiddleware } from './middleware/hello-world/hello-world.middleware';

@Module({
  imports: [UsersModule, TestModule],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        LoggerMiddleware,
        HelloWorldMiddleware
      )
      .forRoutes(
        { path: '/test', method: RequestMethod.POST },
        { path: '/', method: RequestMethod.GET },
      )
  }
}
