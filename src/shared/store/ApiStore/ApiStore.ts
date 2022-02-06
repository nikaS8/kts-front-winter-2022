import {ApiResponse, IApiStore, RequestParams} from "./types";

export default class ApiStore implements IApiStore {
    readonly baseUrl: string;
    constructor(baseUrl: string) {
        // TODO: Примите из параметров конструктора baseUrl и присвойте его в this.baseUrl
        this.baseUrl = baseUrl;
    }

    request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
        // TODO: Напишите здесь код, который с помощью fetch будет делать запрос

        return fetch(this.baseUrl + params.endpoint, params)
            .then(data => data.json())
    }
}