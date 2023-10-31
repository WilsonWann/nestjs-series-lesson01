import { Controller, Get, Post, Patch, Delete, Param, Body, Response, HttpStatus } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) { }

  @Get()
  getAllData(@Response() res) {
    this.testService.getAllData().subscribe((response) => {
      res.status(HttpStatus.OK).json(response)
    })
  }

  @Get(':id')
  getData(@Param() params, @Response() res) {
    this.testService.getData(Number(params.id)).subscribe((response) => {
      res.status(HttpStatus.OK).json(response)
    })
  }

  @Post()
  addData(@Response() res, @Body() data) {
    this.testService.addData(data).subscribe(response => {
      res.status(HttpStatus.CREATED).json(response)
    })
  }

  @Patch(':id')
  updateData(@Param() params, @Response() res, @Body() data) {
    this.testService.updateData(Number(params.id), data).subscribe(response => {
      res.status(HttpStatus.OK).json(response)
    })
  }

  @Delete(':id')
  deleteData(@Param() params, @Response() res) {
    this.testService.deleteData(Number(params.id)).subscribe(response => {
      res.status(HttpStatus.OK).json(response)
    })
  }
}
