import ApiStore from '@shared/store/ApiStore';
import {GetOrganizationReposListParams, IGitHubStore, RepoItem} from "@GitHubStore/types";
import {ApiResponse, HTTPMethod} from "@shared/store/ApiStore/types"

const BASE_URL = 'https://api.github.com';

export default class GitHubStore implements IGitHubStore {
    private readonly apiStore = new ApiStore(BASE_URL);

    async getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[], any>> {
        return await this.apiStore.request({
            method: HTTPMethod.GET,
            data: {},
            headers: {Accept: 'application/vnd.github.v3+json'},
            endpoint: `/orgs/${params.organizationName}/repos`,
        })

    }
}
