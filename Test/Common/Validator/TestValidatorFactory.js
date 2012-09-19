define([
        'doh/main',
        'dojo/Deferred',
        'Sds/Common/Validator/validatorFactory'
    ],
    function(
        doh,
        Deferred,
        validatorFactory
    ){
        doh.register("Sds/Test/Common/Validator/TestValidatorFactory", [

            function CreateTest(doh){

                var testDeferred = new Deferred;

                validatorFactory.create('Sds/Common/Validator/DatatypeValidator', {requiredType: 'string'}).then(function(validator){

                    var testArray = [
                        [true, 'username'],
                        [false, 1233456]
                    ];

                    var index;
                    for (index in testArray){
                        if (testArray[index][0]){
                            doh.assertTrue(validator.isValid(testArray[index][1]));
                        } else {
                            doh.assertFalse(validator.isValid(testArray[index][1]));
                        }
                    }

                    testDeferred.resolve(true);
                });

                return testDeferred;
            },

            function CreateGroupTest(doh){

                var testDeferred = new Deferred;

                validatorFactory.createGroup([
                    {
                        'class': 'Sds/Common/Validator/DatatypeValidator',
                        options: {requiredType: 'string'}
                    },
                    {
                        'class': 'Sds/Common/Validator/IdentifierValidator'
                    }
                ]).then(function(validator){

                    var testArray = [
                        [true, 'username'],
                        [false, 'u'],
                        [false, 1233456]
                    ];

                    var index;
                    for (index in testArray){
                        if (testArray[index][0]){
                            doh.assertTrue(validator.isValid(testArray[index][1]));
                        } else {
                            doh.assertFalse(validator.isValid(testArray[index][1]));
                        }
                    }

                    testDeferred.resolve(true);
                });

                return testDeferred;
            }
        ]);
    }
);

