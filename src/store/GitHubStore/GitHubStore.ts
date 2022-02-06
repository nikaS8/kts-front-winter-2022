import ApiStore from '../../shared/store/ApiStore';
import {IGitHubStore, ApiResp, RepoItem, GetOrganizationReposListParams} from "./types";
import {HTTPMethod} from "../../shared/store/ApiStore/types"

export default class GitHubStore implements IGitHubStore {
    private readonly apiStore = new ApiStore('https://api.github.com');

    async getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>> {
        const data = await this.apiStore.request({
            method: HTTPMethod.GET,
            endpoint: `/orgs/${params.org}/repos`,
            headers: {Accept: 'application/vnd.github.v3+json'},
            data: {}
        })
        return data;
    }
}
