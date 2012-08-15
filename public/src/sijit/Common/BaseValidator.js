define([
    'dojo/_base/declare',
    'dojo/Stateful'
],
function(
    declare,
    Stateful
){
    return declare(
        'sijit.Common.BaseValidator',
        [Stateful],
        {
            messages: [],

            isValid: function(value){
                this.messages = [];

                if(value){
                    return true;
                } else {
                    this.messages.push('Invalid');
                    return false;
                }
            }
        }
    );
});