import { DynamicModule, Module } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';

@Module({})
export class ConfigurationModule {

  static forRoot(): DynamicModule {
    return {
      providers: [
        ConfigurationService
      ],
      module: ConfigurationModule,
      global: true
    }
  }

}
