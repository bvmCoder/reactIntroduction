(function() {
    'use strict';
    // pure and impure functions

    var add = function(a, b, c) {
       return (a + b + c);
    };

    // it always going to return the same result as the same input

    // there are no side effects

    // no variable defined up and above

    // will not change any variable's value or update variables value outside of the function

    // no async call or API call or AJAX call || http request

    var a = 5;

    function addOne(b){
        return a + b;
    }

    var result;

    function addTwo(a, b){
        result = a + b;
        return result;
    }

    function addThree(a, b){
        return a + b + new Date().getSeconds();
    }

    function changeProp(obj){

        obj.name = 'Jen';
        return obj;
        /*
        return {
            ...obj,
            name : 'Jen'

        };
        */
    }

    var res = changeProp({
        name: 'Dixit Patel',
        age : 25
    });

    console.log(res);


})();
