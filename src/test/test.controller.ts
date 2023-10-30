import { Controller, Get, Post, Patch, Delete, Param, Body, Response, HttpStatus } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) { }

  @Get()
  getAllData(@Response() res) {
    this.testService.getAllData().subscribe((data) => {
      res.status(HttpStatus.OK).json(data)
    })
  }

  @Get('/:id')
  getData(@Param() params, @Response() res) {
    this.testService.getData(Number(params.id)).subscribe((data) => {
      res.status(HttpStatus.OK).json(data)
    })
  }

  @Post()
  addData(@Response() res, @Body() data) {
    this.testService.addData(data).subscribe(data => {
      res.status(HttpStatus.CREATED).json(data)
    })
    // res.status(HttpStatus.CREATED).json(data)
  }

  @Patch()
  updateData(@Param() params, @Response() res, @Body() data) {
    res.status(HttpStatus.OK).json(data)
  }

  @Delete('/:id')
  deleteData(@Param() params, @Response() res) {
    res.status(HttpStatus.OK).json(document);
  }
}
