var React = require('react');
var ReactDOM = require('react-dom');

var Greeter = React.createClass({
	// added defaultProps is we don't pass any props to the Greeter Component
	getDefaultProps : function() {
		return {
			name : 'WebPack',
			message: 'This is From Greeter Component'
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
		if(typeof(name) === 'string' && name.length > 0) {
			this.setState({
				name : name
			});
		}
		nameRef.value = '';
		//console.log(name);
	},
	render: function () {
	  	console.log(this); // very very important
	  	var name = this.state.name,
	  	 	message = this.props.message;

	    return (
	      <div>
	        <h1>Hello {name}!</h1>
	        <p>{message + ' and Use it with the String Concatenation!'}</p>

	        <form onSubmit={this.onButtonClick}>
	        	<input type="text" ref="name" />
	        	<button>Set Name</button>
	        </form>

	      </div>
	    );
	}
});

function byId(id){
	return document.getElementById(id);
}

var firstName = 'Dixit Patel';
var MainApp = byId('app');

// render the Component called Greeter , name is the prop is the HTML attribute
ReactDOM.render(
  <Greeter name={firstName} message={'Message from Props'} />, MainApp
);

// props is short for properties, is the way to pass the data into your component