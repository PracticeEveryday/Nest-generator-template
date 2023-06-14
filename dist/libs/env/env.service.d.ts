import { ConfigService } from '@nestjs/config';
import { EnvEnum } from './env.enum';
export declare class EnvService {
    private readonly configService;
    constructor(configService: ConfigService);
    get<T>(key: EnvEnum, defaultValue?: T): T;
}
