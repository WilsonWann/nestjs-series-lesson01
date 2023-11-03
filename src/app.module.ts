import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configurationFactory from 'config/configuration.factory';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { MulterHelper } from './core/helpers/multer.helper';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: MulterHelper.destination,
        filename: MulterHelper.filenameHandler
      })
    }),
    ConfigModule.forRoot({
      envFilePath: [
        '.development.local.env',
        '.development.env',
      ],
      expandVariables: true,
      load: [configurationFactory],
    })
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
  ],
})

export class AppModule {
}
