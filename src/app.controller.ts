import { Controller, Get, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';



@Controller()
export class AppController {
  constructor(
    private readonly configService: ConfigService,
  ) { }

  @Get()
  getUserName() {
    const app_domain = this.configService.get('APP_DOMAIN');
    const redirect_url = this.configService.get('APP_REDIRECT_URL');
    return { app_domain, redirect_url }
  }

  @Post('/multiple')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'first' },
    { name: 'second' },
  ]))

  uploadSingleFile(@UploadedFiles() files: { [x: string]: Express.Multer.File[] }) {
    const { first, second } = files
    const list = [...first, ...second]
    return list.map(({ fieldname, originalname }) => ({ fieldname, originalname }))

  }
  @Post('/multiple/any')
  @UseInterceptors(AnyFilesInterceptor())
  uploadSingleFileAny(@UploadedFiles() files: Express.Multer.File[]) {
    return files.map(({ fieldname, originalname }) => ({ fieldname, originalname }))

  }
}
