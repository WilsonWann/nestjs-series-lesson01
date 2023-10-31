import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const status = exception.getStatus()
    const message = exception.message
    const timeStamp = new Date().toISOString()

    const responseObject = {
      statusCode: status,
      message,
      timeStamp
    }
    response
      .status(status)
      .json(responseObject)
  }

}
