export enum HTTPMethod {
    GET = 'GET',
    POST = 'POST',
}

export type RequestParams<ReqT> = {
    method: HTTPMethod;
    endpoint: string;
    headers: Record<string, string>;

    /**
     * Объект с данными запроса.
     * - Для GET-запроса данные превращаются в query-строку и добавляются в endpoint
     * - Для POST-запроса данные преобразуются к формату JSON и добавляются в тело запроса (необязательное требование)
     */
    data: ReqT;
}

export enum StatusHTTP {
    // TODO: заполнить
    OK = 200,
    NOT_FOUND = 404,
    UNEXPECTED_ERROR = 'UNEXPECTED_ERROR'
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
}
    |{
    success: false;
    data: any;
    status: StatusHTTP;
};

export interface IApiStore {
    readonly baseUrl: string;
    request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>>
}