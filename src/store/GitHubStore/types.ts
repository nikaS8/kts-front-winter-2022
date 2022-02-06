export interface IGitHubStore {
    getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>>;
}

export interface GetOrganizationReposListParams {
    org: string;
}

export type ApiResp<T = []> = {}

export interface RepoItem {
    "id": string,
    "node_id": string,
    "name": string,
    "full_name": string,
}
