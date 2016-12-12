var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

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

module.exports = Greeter;
