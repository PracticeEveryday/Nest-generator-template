import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from './libs/env/env.service';
import { EnvEnum } from './libs/env/env.enum';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './apps/common/swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    optionsSuccessStatus: 200,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: true,
    }),
  );

  setupSwagger(app);
  const envService = app.get(EnvService);
  const PORT = Number(envService.get(EnvEnum.PORT));

  await app.listen(PORT);
}
bootstrap();
