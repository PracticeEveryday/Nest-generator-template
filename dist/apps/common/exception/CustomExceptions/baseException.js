"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseException = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class BaseException extends common_1.HttpException {
    constructor(properties) {
        super(properties.message, properties.statusCode);
        this._success = false;
        this._title = properties.title;
        this._statusCode = properties.statusCode;
        this._success = false;
        this.raw = properties.raw;
    }
    getResponse() {
        return {
            statusCode: this.statusCode,
            success: false,
            data: {
                title: this.title,
                message: this.message,
            },
        };
    }
    get statusCode() {
        return this._statusCode;
    }
    get title() {
        return this._title;
    }
    get success() {
        return this._success;
    }
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], BaseException.prototype, "_statusCode", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Object)
], BaseException.prototype, "_success", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], BaseException.prototype, "_title", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Error)
], BaseException.prototype, "raw", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '응답코드' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], BaseException.prototype, "statusCode", null);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '에러 제목' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], BaseException.prototype, "title", null);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'API 요청 성공 유무' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], BaseException.prototype, "success", null);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '에러 메시지' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], BaseException.prototype, "message", void 0);
exports.BaseException = BaseException;
//# sourceMappingURL=baseException.js.map