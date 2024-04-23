/* tslint:disable */
/* eslint-disable */
/**
 * Tandoor
 * Tandoor API Docs
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NutritionInformationRequest
 */
export interface NutritionInformationRequest {
    /**
     * 
     * @type {number}
     * @memberof NutritionInformationRequest
     */
    carbohydrates: number;
    /**
     * 
     * @type {number}
     * @memberof NutritionInformationRequest
     */
    fats: number;
    /**
     * 
     * @type {number}
     * @memberof NutritionInformationRequest
     */
    proteins: number;
    /**
     * 
     * @type {number}
     * @memberof NutritionInformationRequest
     */
    calories: number;
    /**
     * 
     * @type {string}
     * @memberof NutritionInformationRequest
     */
    source?: string;
    /**
     * 
     * @type {number}
     * @memberof NutritionInformationRequest
     */
    id?: number;
}

/**
 * Check if a given object implements the NutritionInformationRequest interface.
 */
export function instanceOfNutritionInformationRequest(value: object): boolean {
    if (!('carbohydrates' in value)) return false;
    if (!('fats' in value)) return false;
    if (!('proteins' in value)) return false;
    if (!('calories' in value)) return false;
    return true;
}

export function NutritionInformationRequestFromJSON(json: any): NutritionInformationRequest {
    return NutritionInformationRequestFromJSONTyped(json, false);
}

export function NutritionInformationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): NutritionInformationRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'carbohydrates': json['carbohydrates'],
        'fats': json['fats'],
        'proteins': json['proteins'],
        'calories': json['calories'],
        'source': json['source'] == null ? undefined : json['source'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function NutritionInformationRequestToJSON(value?: NutritionInformationRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'carbohydrates': value['carbohydrates'],
        'fats': value['fats'],
        'proteins': value['proteins'],
        'calories': value['calories'],
        'source': value['source'],
        'id': value['id'],
    };
}

