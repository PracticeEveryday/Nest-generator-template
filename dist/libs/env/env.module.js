"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EnvModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvModule = void 0;
const common_1 = require("@nestjs/common");
const env_service_1 = require("./env.service");
const config_1 = require("@nestjs/config");
const nodeEnv_enum_1 = require("./nodeEnv.enum");
const envAnonymousFunc = (() => {
    const BASE_URL = 'config/.env';
    const envFiles = [];
    switch (process.env.NODE_ENV) {
        case nodeEnv_enum_1.NodeEnvEnum.Main:
            envFiles.push(`${BASE_URL}.${nodeEnv_enum_1.NodeEnvEnum.Main}`);
            break;
        case nodeEnv_enum_1.NodeEnvEnum.Stage:
            envFiles.push(`${BASE_URL}.${nodeEnv_enum_1.NodeEnvEnum.Stage}`);
            break;
        case nodeEnv_enum_1.NodeEnvEnum.Test:
            envFiles.push(`${BASE_URL}.${nodeEnv_enum_1.NodeEnvEnum.Test}`);
            break;
        case nodeEnv_enum_1.NodeEnvEnum.Dev:
            envFiles.push(`${BASE_URL}.${nodeEnv_enum_1.NodeEnvEnum.Dev}`);
            break;
        default:
            envFiles.push(`${BASE_URL}`);
    }
    return envFiles;
})();
let EnvModule = EnvModule_1 = class EnvModule {
    static forRoot() {
        return {
            global: true,
            module: EnvModule_1,
        };
    }
};
EnvModule = EnvModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: envAnonymousFunc,
                isGlobal: true,
            }),
        ],
        providers: [env_service_1.EnvService],
        exports: [env_service_1.EnvService],
    })
], EnvModule);
exports.EnvModule = EnvModule;
//# sourceMappingURL=env.module.js.map