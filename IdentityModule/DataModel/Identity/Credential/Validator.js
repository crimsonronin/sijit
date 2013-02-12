// This code generated by Sds\DoctrineExtensions\Dojo
define([
    'dojo/_base/declare',    
    'Sds/Validator/Group',
    'Sds/Validator/Required',
    'Sds/Validator/Credential'
],
function(
    declare,    
    Group,
    Required,
    Credential
){
    // Will return a validator that can be used to check
    // the credential field

    return declare(
        'Sds/IdentityModule/DataModel/Identity/Credential/Validator',
        [            
            Group        
        ],
        {
            field: 'credential',
            
            validators: [
            	new Required,
            	new Credential
            ]
        }
    );
});
