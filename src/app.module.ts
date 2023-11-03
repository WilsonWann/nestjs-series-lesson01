import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configurationFactory from 'config/configuration.factory';

@Module({
  imports: [
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
