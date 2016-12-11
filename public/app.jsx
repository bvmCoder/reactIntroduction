var React = require('react');
var ReactDOM = require('react-dom');


const _ById = (id) => document.getElementById(id);


var GreeterMessage = React.createClass({
	render : function() {
		var name = this.props.name;
		var message = this.props.message;
		return (
			<div>
				<h1>Simple:- {name} using Props on GretterMessgage Component</h1>
				<p>{message}</p>
			</div>
		);
	}
});

var GreeterForm = React.createClass({
	onFormSubmit : function (evt){
		evt.preventDefault();
		console.log(this);
		var nameRef = this.refs.name;
		var name = nameRef.value;
		if(typeof(name) === 'string' && name.length > 0) {
			this.setState({
				name : name
			});
		}
		nameRef.value = '';
		//console.log(name);
	},
	render : function() {
		return (
			<form onSubmit={this.onFormSubmit}>
	        	<input type="text" ref="name" />
	        	<button className="btn btn-success">Set Name</button>
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
			name : this.props.name
		};
	},
	onButtonClick : function (e){
		e.preventDefault();
		console.log(this);
		var nameRef = this.refs.name;
		var name = nameRef.value;
		if(typeof(name) === "string" && name.length > 0) {
			this.setState({
				name : name
			});
		}
		nameRef.value = "";
		//console.log(name);
	},
	handleNewName: function () {
		this.setState({
			name : name
		});
		this.props.message = "Something New";
		// updating props values is not allowed in react
		// updating state values are totally fine
		// we can only have one root element and
		// render it's children for the container component
	},
	render: function () {
	  	console.log(this); // very very important
	  	var name = this.state.name;
	  	var message = this.props.message;

	    return (
	      <div>
	        <GreeterMessage name={name} message={message} />

	        <form onSubmit={this.onButtonClick}>
	        	<input type="text" ref="name" />
	        	<button className="btn btn-success">Set Name</button>
	        </form>
	        <hr />
	        <GreeterForm onNewName={this.handleNewName} />
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
