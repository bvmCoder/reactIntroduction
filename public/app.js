(function() {
    'use strict';
    // pure and impure functions

    var Greeter = require('./components/Greeter');

    var add = function(a, b, c) {
        return (a + b + c);
    };

    // it always going to return the same result as the same input

    // there are no side effects

    // no variable defined up and above

    // will not change any variable's value or update variables value outside of the function

    // no async call or API call or AJAX call || http request

    var a = 5;

    function addOne(b) {
        return a + b;
    }

    var result;

    function addTwo(a, b) {
        result = a + b;
        return result;
    }

    function addThree(a, b) {
        return a + b + new Date().getSeconds();
    }

    function changeProp(obj) {

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
        age: 25
    });

    console.log(res);


    var redux = require('redux');
    console.log('Starting Redux Example');
    /*
    var reducer = (state = {name : 'Anonymous'}, action) => {
        // state = state || {name : 'Anonymous'};
        // very basic reduces , default state reducer has
        // even if there in no action || the action it dosnt recognize
        return state;
    };

    var store = redux.createStore(reducer);

    var currentState = store.getState();
    console.log('Current State', currentState);
    */
    console.log('Starting ToDo Redux Example');
    var stateDefault = {
        searchText: '',
        showCompleted: false,
        todos: []
    };
    /*
    var reducer = (state = stateDefault, action) => {

    };


    var store = redux.createStore(reducer);
    console.log('Current State', store.getState());
    */


    Greeter();

    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };

})();
