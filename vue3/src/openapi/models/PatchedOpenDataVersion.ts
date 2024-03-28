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
 * Moves `UniqueValidator`'s from the validation stage to the save stage.
 * It solves the problem with nested validation for unique fields on update.
 * 
 * If you want more details, you can read related issues and articles:
 * https://github.com/beda-software/drf-writable-nested/issues/1
 * http://www.django-rest-framework.org/api-guide/validators/#updating-nested-serializers
 * 
 * Example of usage:
 * ```
 *     class Child(models.Model):
 *     field = models.CharField(unique=True)
 * 
 * 
 * class Parent(models.Model):
 *     child = models.ForeignKey('Child')
 * 
 * 
 * class ChildSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
 *     class Meta:
 *         model = Child
 * 
 * 
 * class ParentSerializer(NestedUpdateMixin, serializers.ModelSerializer):
 *     child = ChildSerializer()
 * 
 *     class Meta:
 *         model = Parent
 * ```
 * 
 * Note: `UniqueFieldsMixin` must be applied only on the serializer
 * which has unique fields.
 * 
 * Note: When you are using both mixins
 * (`UniqueFieldsMixin` and `NestedCreateMixin` or `NestedUpdateMixin`)
 * you should put `UniqueFieldsMixin` ahead.
 * @export
 * @interface PatchedOpenDataVersion
 */
export interface PatchedOpenDataVersion {
    /**
     * 
     * @type {number}
     * @memberof PatchedOpenDataVersion
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataVersion
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataVersion
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataVersion
     */
    comment?: string;
}

/**
 * Check if a given object implements the PatchedOpenDataVersion interface.
 */
export function instanceOfPatchedOpenDataVersion(value: object): boolean {
    return true;
}

export function PatchedOpenDataVersionFromJSON(json: any): PatchedOpenDataVersion {
    return PatchedOpenDataVersionFromJSONTyped(json, false);
}

export function PatchedOpenDataVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedOpenDataVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'code': json['code'] == null ? undefined : json['code'],
        'comment': json['comment'] == null ? undefined : json['comment'],
    };
}

export function PatchedOpenDataVersionToJSON(value?: PatchedOpenDataVersion | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'code': value['code'],
        'comment': value['comment'],
    };
}
