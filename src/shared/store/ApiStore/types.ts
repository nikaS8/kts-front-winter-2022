export enum HTTPMethod {
    GET = 'GET',
    POST = 'POST',
}

export type RequestParams<ReqT> = {
    method: HTTPMethod;
    endpoint: string;
    headers: Record<string, string>;
    data: ReqT;
}

export enum StatusHTTP {
    OK = 200,
    NOT_FOUND = 404,
    BAD_STATUS = 'BAD_STATUS'
}

export type ApiResponse<SuccessT, ErrorT> =
    | {
    success: true;
    data: SuccessT;
    status: StatusHTTP;
}
    | {
    success: false;
    data: ErrorT;
    status: StatusHTTP;
};

export interface IApiStore {
    readonly baseUrl: string;
    request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>>
}