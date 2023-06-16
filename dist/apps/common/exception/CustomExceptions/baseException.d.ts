import { HttpException } from '@nestjs/common';
type ExecptionType = 'statusCode' | 'title' | 'message' | 'raw';
export declare class BaseException extends HttpException {
    private readonly _statusCode;
    private readonly _success;
    private readonly _title;
    raw: Error;
    constructor(properties: Pick<BaseException, ExecptionType>);
    getResponse(): {
        statusCode: number;
        success: boolean;
        data: {
            title: string;
            message: string;
        };
    };
    get statusCode(): number;
    get title(): string;
    get success(): boolean;
    message: string;
}
export {};
