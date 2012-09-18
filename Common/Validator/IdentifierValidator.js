define([
    'dojo/_base/declare',
    'Sds/Common/Validator/ValidatorGroup',
    'Sds/Common/Validator/LengthValidator',
    'Sds/Common/Validator/IdentifierCharsValidator'
],
function(
    declare,
    ValidatorGroup,
    LengthValidator,
    IdentifierCharsValidator
){
    return declare(
        'Sds/Common/Validator/IdentifierValidator',
        [ValidatorGroup],
        {
            constructor: function(){
                this.validators = [
                    new LengthValidator(3, 40),
                    new IdentifierCharsValidator()
                ]
            }
        }
    );
});