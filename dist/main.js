"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const env_service_1 = require("./libs/env/env.service");
const env_enum_1 = require("./libs/env/env.enum");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const envService = app.get(env_service_1.EnvService);
    const PORT = Number(envService.get(env_enum_1.EnvEnum.PORT));
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map