import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {AppService, dynamicProvider1, dynamicProvider2} from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, dynamicProvider1, dynamicProvider2],
})
export class AppModule {}
