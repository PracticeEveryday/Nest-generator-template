import { BaseException } from './base.exception';
export type ExceptionPropertyType = 'title' | 'message' | 'raw';
export declare class UnknownException extends BaseException {
    constructor(properties: Pick<BaseException, ExceptionPropertyType>);
}
