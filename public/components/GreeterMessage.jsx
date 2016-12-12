var React = require('react');

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

module.exports = GreeterMessage;
