"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const fs = require("fs");
const swagger_1 = require("@nestjs/swagger");
const basicAuth = require("express-basic-auth");
function setupSwagger(app) {
    const SWAGGER_USER = process.env['SWAGGER_USER'];
    app.use(['/api-docs'], basicAuth({
        challenge: true,
        users: {
            [SWAGGER_USER]: process.env['SWAGGER_PASSWORD'],
        },
    }));
    const swaggerInfo = fs.readFileSync('src/apps/common/swagger/swagger-info.md', 'utf-8');
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Template')
        .setDescription(swaggerInfo)
        .setVersion('0.0.1')
        .addBearerAuth({
        description: '인증서버에서 받은 accessToken을 집어넣어주세요',
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
    })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.js.map