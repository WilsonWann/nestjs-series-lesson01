import { HttpException, Controller, Get, Post, Patch, Delete, Param, Body, Response, HttpStatus, UsePipes, UseFilters } from '@nestjs/common';
import { TestService } from './test.service';
import { TestPipe } from './test.pipe';
import { CreateTestDto } from '../dto/create-test.dto';
import { ParseIntPipe } from 'src/pipe/parse-int/parse-int.pipe';

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
  getData(@Param('id', new ParseIntPipe()) id, @Response() res) {
    this.testService.getData(id).subscribe((response) => {
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
  updateData(@Param('id', new ParseIntPipe()) id, @Response() res, @Body() data) {
    this.testService.updateData(id, data).subscribe(response => {
      res.status(HttpStatus.OK).json(response)
    })
  }

  @Delete(':id')
  deleteData(@Param('id', new ParseIntPipe()) id, @Response() res) {
    this.testService.deleteData(id).subscribe(response => {
      res.status(HttpStatus.OK).json(response)
    })
  }
}
