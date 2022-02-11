import {ApiResponse} from "@ApiStore/types";

export type GetOrganizationReposListParams = {
    organizationName: string;
}

export type GitHubRepoOwner = {
    id: number,
    login: string,
    url: string,
    avatar_url: string,
}

export type RepoItem = {
    id: string,
    url: string,
    name: string,
    stargazers_count: number,
    owner: GitHubRepoOwner,
}

export interface IGitHubStore {
    getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[],any>>;
}
