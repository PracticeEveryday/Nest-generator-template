"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnknownException = void 0;
const common_1 = require("@nestjs/common");
const base_exception_1 = require("./base.exception");
class UnknownException extends base_exception_1.BaseException {
    constructor(properties) {
        super({
            statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            title: properties.title,
            message: properties.message,
            raw: properties.raw,
        });
    }
}
exports.UnknownException = UnknownException;
//# sourceMappingURL=unknown.exception.js.map