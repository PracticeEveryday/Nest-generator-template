import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {BaseException} from "./apps/common/exception/CustomExceptions/base.exception";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/error")
  getError(): string {
    const error = new Error("err")
    throw new BaseException({title: "test", message: "test", raw:error, statusCode: 400})
  }
}
