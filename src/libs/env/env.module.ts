import {DynamicModule, Module} from '@nestjs/common';
import { EnvService } from './env.service';
import {ConfigModule} from "@nestjs/config";
import {NodeEnvEnum} from "./nodeEnv.enum";

const envAnonymousFunc = (() => {
  const BASE_URL = 'config/.env'
  const envFiles: string[] = [];
  switch (process.env.NODE_ENV) {
    case NodeEnvEnum.Main:
      envFiles.push(`${BASE_URL}.${NodeEnvEnum.Main}`);
      break;
    case NodeEnvEnum.Stage:
      envFiles.push(`${BASE_URL}.${NodeEnvEnum.Stage}`);
      break;
    case NodeEnvEnum.Test:
      envFiles.push(`${BASE_URL}.${NodeEnvEnum.Test}`);
      break;
    case NodeEnvEnum.Dev:
      envFiles.push(`${BASE_URL}.${NodeEnvEnum.Dev}`);
      break;
    default:
      envFiles.push(`${BASE_URL}`);
  }
  return envFiles;
})()

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envAnonymousFunc,
      isGlobal: true,
    }),
  ],
  providers: [EnvService],
  exports: [EnvService],
})
export class EnvModule {
  static forRoot(): DynamicModule {
    return {
      global: true,
      module: EnvModule,
    };
  }
}
