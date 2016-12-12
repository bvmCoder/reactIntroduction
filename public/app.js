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


    var React = require('react');
    var ReactDOM = require('react-dom');


    const _ById = (id) => document.getElementById(id);


    var GreeterMessage = React.createClass({
    	render : function() {
    		var name = this.props.name;
    		var message = this.props.message;
    		return (
    			<div>
    				<h1>Name Props on This Component: {name}</h1>
    				<p>Message Props {message}</p>
    			</div>
    		);
    	}
    });

    var GreeterForm = React.createClass({
    	onFormSubmit : function (evt){
    		evt.preventDefault();
    		console.log(this);
    		var updates = {};
    		var name = this.refs.name.value;
    		var message = this.refs.message.value;

    		if (name.length > 0) {
    			updates.name = name;
    			this.refs.name.value = '';
    		}

    		if (message.length > 0) {
    			updates.message = message;
    			this.refs.message.value = '';
    		}

    		this.props.onNewData(updates);
    		//console.log(name);
    	},
    	render: function () {
    		    return (
    		      <form onSubmit={this.onFormSubmit}>
    		        <div>
    		          <input type="text" ref="name" placeholder="Enter name"/>
    		        </div>
    		        <div>
    		          <textarea ref="message" placeholder="Enter message"></textarea>
    		        </div>
    		        <div>
    		          <button className="btn btn-primary">SetData</button>
    		        </div>
    		      </form>
    		    );
    	}
    });

    var Greeter = React.createClass({
    	// added defaultProps is we don't pass any props to the Greeter Component
    	getDefaultProps : function() {
    		return {
    			name : "WebPack",
    			message: "This is From Greeter Component"
    		};
    	},
    	getInitialState : function () {
    		return {
    			name : this.props.name,
    			message: this.props.message
    		};
    	},
    	handleNewData: function (updates) {
    		this.setState(updates);
    		this.props.message = "Something New";
    		// updating props values is not allowed in react
    		// updating state values are totally fine
    		// we can only have one root element and
    		// render it's children for the container component
    	},
    	render: function () {
    	  	console.log(this); // very very important
    	  	var name = this.state.name;
    	  	var message = this.state.message;

    	    return (
    	      <div>
    					<GreeterMessage name={name} message={message}/>
            	<GreeterForm onNewData={this.handleNewData}/>
    	      </div>
    	    );
    	}
    });



    var firstName = "Dixit Patel";
    var MainApp = _ById("app");

    var nameMessage = {
    	name : "Dixit Patel",
    	message : "Message for React and Redux"
    };

    // render the Component called Greeter , name is the prop is the HTML attribute
    // ReactDOM.render(<Greeter name={firstName} message={'Message from Props'} />, _ById('app'));
    ReactDOM.render(<Greeter {...nameMessage} />, MainApp);

    // props is short for properties, is the way to pass the data into your component


})();
