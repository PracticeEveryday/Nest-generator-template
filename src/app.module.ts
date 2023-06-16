import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeneratorModule } from './apps/generator/generator.module';
import { EnvModule } from './libs/env/env.module';
import {APP_FILTER} from "@nestjs/core";
import {CustomExceptionFilter} from "./apps/common/exception/filter/httpException.filter";

const filter =    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter,
    }
@Module({
  imports: [GeneratorModule, EnvModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, filter],
})
export class AppModule {}
