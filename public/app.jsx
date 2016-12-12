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
