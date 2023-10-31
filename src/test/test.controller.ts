import { Controller, Get, Post, Patch, Delete, Param, Body, Response, HttpStatus, UsePipes } from '@nestjs/common';
import { TestService } from './test.service';
import { TestPipe } from './test.pipe';
import { CreateTestDto } from './create-test.dto';

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
  @UsePipes(TestPipe)
  addData(@Response() res, @Body() document: CreateTestDto) {
    this.testService.addData(document).subscribe(response => {
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
