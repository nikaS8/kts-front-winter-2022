import qs from "qs";
import {ApiResponse, HTTPMethod, IApiStore, RequestParams, StatusHTTP} from "@ApiStore/types";

export default class ApiStore implements IApiStore {
    readonly baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private getRequestData<ReqT>(params: RequestParams<ReqT>) : [string, RequestInit] {
        // let endpoint = `${this.baseUrl}${params.endpoint}`;
        let endpoint = this.baseUrl + params.endpoint;
        const req : RequestInit = {
            method: params.method,
            headers: {...params.headers},
        }

        if(params.method === HTTPMethod.GET){
            endpoint = `${endpoint}?${qs.stringify(params.data)}` // если ГЭТ, то данные кладем в урл, чтобы сформировалась строка
        }

        if(params.method === HTTPMethod.POST){
            req.body = JSON.stringify(params.data);// если ПОСТ, то данные кладем в бади
            req.headers = {
                ...req.headers,
                'Content-Type': 'application/json;charset=UTF-8', // add to params.headers one more
            }
        }
        return ([endpoint, req])
    }

    async request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
        try {
            const [endpoint, req] = this.getRequestData(params);

            const responce = await fetch(endpoint, req)
            if(responce.ok){
                return {
                    success: true,
                    data: await responce.json(),
                    status: responce.status,
                }
            }
            return {
                success: false,
                data: await responce.json(),
                status: responce.status,
            }
        } catch (e){
            return {
                success: false,
                data: e,
                status: StatusHTTP.UNEXPECTED_ERROR,
            }
        }
    }
}