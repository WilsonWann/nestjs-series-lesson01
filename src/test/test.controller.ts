import { ValidationPipe, HttpException, Controller, Get, Post, Patch, Delete, Param, Body, Response, HttpStatus, UsePipes, UseFilters, NotAcceptableException, UseInterceptors, UseGuards } from '@nestjs/common';
import { TestService } from './test.service';
import { TestPipe } from '../pipe/test/test.pipe';
import { CreateTestDto } from '../dto/create-test.dto';
import { ParseIntPipe } from 'src/pipe/parse-int/parse-int.pipe';
import { ValidationError } from 'class-validator';
import { HelloWordInterceptor } from 'src/interceptor/hello-word/hello-word.interceptor';
import { AuthGuard } from 'src/guard/auth/auth.guard';

@Controller('test')
@UseGuards(AuthGuard)
@UseInterceptors(HelloWordInterceptor)
export class TestController {
  constructor(private readonly testService: TestService) { }

  @Get()
  getAllData(@Response() res) {
    this.testService.getAllData().subscribe((response) => {
      res.status(HttpStatus.OK).json(response)
    })
  }

  @Get(':id')
  getData(@Param('id', ParseIntPipe) id, @Response() res) {
    this.testService.getData(id).subscribe((response) => {
      res.status(HttpStatus.OK).json(response)
    })
  }

  @Post()
  @UsePipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    exceptionFactory: (errors: ValidationError[]) => {
      return new NotAcceptableException({
        code: 5566,
        message: '格式錯誤',
        errors
      })
    }
  }))
  addData(@Response() res, @Body() dto: CreateTestDto) {
    this.testService.addData(dto).subscribe(response => {
      res.status(HttpStatus.CREATED).json(response)
    })
  }

  @Patch(':id')
  updateData(@Param('id', ParseIntPipe) id, @Response() res, @Body() data) {
    this.testService.updateData(id, data).subscribe(response => {
      res.status(HttpStatus.OK).json(response)
    })
  }

  @Delete(':id')
  deleteData(@Param('id', ParseIntPipe) id, @Response() res) {
    this.testService.deleteData(id).subscribe(response => {
      res.status(HttpStatus.OK).json(response)
    })
  }
}
