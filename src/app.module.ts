import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeneratorModule } from './apps/generator/generator.module';
import { EnvModule } from './libs/env/env.module';

@Module({
  imports: [GeneratorModule, EnvModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
