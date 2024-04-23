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
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface AutoMealPlan
 */
export interface AutoMealPlan {
    /**
     * 
     * @type {Date}
     * @memberof AutoMealPlan
     */
    startDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof AutoMealPlan
     */
    endDate: Date;
    /**
     * 
     * @type {number}
     * @memberof AutoMealPlan
     */
    mealTypeId: number;
    /**
     * 
     * @type {Array<any>}
     * @memberof AutoMealPlan
     */
    keywordIds: Array<any>;
    /**
     * 
     * @type {number}
     * @memberof AutoMealPlan
     */
    servings: number;
    /**
     * 
     * @type {Array<User>}
     * @memberof AutoMealPlan
     */
    shared?: Array<User>;
    /**
     * 
     * @type {boolean}
     * @memberof AutoMealPlan
     */
    addshopping: boolean;
}

/**
 * Check if a given object implements the AutoMealPlan interface.
 */
export function instanceOfAutoMealPlan(value: object): boolean {
    if (!('startDate' in value)) return false;
    if (!('endDate' in value)) return false;
    if (!('mealTypeId' in value)) return false;
    if (!('keywordIds' in value)) return false;
    if (!('servings' in value)) return false;
    if (!('addshopping' in value)) return false;
    return true;
}

export function AutoMealPlanFromJSON(json: any): AutoMealPlan {
    return AutoMealPlanFromJSONTyped(json, false);
}

export function AutoMealPlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoMealPlan {
    if (json == null) {
        return json;
    }
    return {
        
        'startDate': (new Date(json['start_date'])),
        'endDate': (new Date(json['end_date'])),
        'mealTypeId': json['meal_type_id'],
        'keywordIds': json['keyword_ids'],
        'servings': json['servings'],
        'shared': json['shared'] == null ? undefined : ((json['shared'] as Array<any>).map(UserFromJSON)),
        'addshopping': json['addshopping'],
    };
}

export function AutoMealPlanToJSON(value?: AutoMealPlan | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'start_date': ((value['startDate']).toISOString().substring(0,10)),
        'end_date': ((value['endDate']).toISOString().substring(0,10)),
        'meal_type_id': value['mealTypeId'],
        'keyword_ids': value['keywordIds'],
        'servings': value['servings'],
        'shared': value['shared'] == null ? undefined : ((value['shared'] as Array<any>).map(UserToJSON)),
        'addshopping': value['addshopping'],
    };
}

