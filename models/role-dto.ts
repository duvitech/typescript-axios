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
/**
 * 
 * @export
 * @interface RoleDto
 */
export interface RoleDto {
    /**
     * 
     * @type {number}
     * @memberof RoleDto
     */
    id?: any;
    /**
     * 
     * @type {string}
     * @memberof RoleDto
     */
    name: any;
    /**
     * 
     * @type {string}
     * @memberof RoleDto
     */
    displayName: any;
    /**
     * 
     * @type {string}
     * @memberof RoleDto
     */
    normalizedName?: any;
    /**
     * 
     * @type {string}
     * @memberof RoleDto
     */
    description?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof RoleDto
     */
    grantedPermissions?: any;
}
