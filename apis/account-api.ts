/* tslint:disable */
/* eslint-disable */
/**
 * Dashboard API
 * Dashboard
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { IsTenantAvailableInput } from '../models';
import { IsTenantAvailableOutput } from '../models';
import { RegisterInput } from '../models';
import { RegisterOutput } from '../models';
/**
 * AccountApi - axios parameter creator
 * @export
 */
export const AccountApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {IsTenantAvailableInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiServicesAppAccountIsTenantAvailablePost: async (body?: IsTenantAvailableInput, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/services/app/Account/IsTenantAvailable`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {RegisterInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiServicesAppAccountRegisterPost: async (body?: RegisterInput, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/services/app/Account/Register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AccountApi - functional programming interface
 * @export
 */
export const AccountApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {IsTenantAvailableInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiServicesAppAccountIsTenantAvailablePost(body?: IsTenantAvailableInput, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IsTenantAvailableOutput>> {
            const localVarAxiosArgs = await AccountApiAxiosParamCreator(configuration).apiServicesAppAccountIsTenantAvailablePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {RegisterInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiServicesAppAccountRegisterPost(body?: RegisterInput, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RegisterOutput>> {
            const localVarAxiosArgs = await AccountApiAxiosParamCreator(configuration).apiServicesAppAccountRegisterPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AccountApi - factory interface
 * @export
 */
export const AccountApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {IsTenantAvailableInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiServicesAppAccountIsTenantAvailablePost(body?: IsTenantAvailableInput, options?: any): AxiosPromise<IsTenantAvailableOutput> {
            return AccountApiFp(configuration).apiServicesAppAccountIsTenantAvailablePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {RegisterInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiServicesAppAccountRegisterPost(body?: RegisterInput, options?: any): AxiosPromise<RegisterOutput> {
            return AccountApiFp(configuration).apiServicesAppAccountRegisterPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccountApi - object-oriented interface
 * @export
 * @class AccountApi
 * @extends {BaseAPI}
 */
export class AccountApi extends BaseAPI {
    /**
     * 
     * @param {IsTenantAvailableInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public apiServicesAppAccountIsTenantAvailablePost(body?: IsTenantAvailableInput, options?: any) {
        return AccountApiFp(this.configuration).apiServicesAppAccountIsTenantAvailablePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {RegisterInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public apiServicesAppAccountRegisterPost(body?: RegisterInput, options?: any) {
        return AccountApiFp(this.configuration).apiServicesAppAccountRegisterPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
