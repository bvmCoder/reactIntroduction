var Greeter = React.createClass({
	// added defaultProps is we don't pass any props to the Greeter Component
	getDefaultProps : function() {
		return {
			name : 'WebPack',
			message: 'This is From Greeter Component'
		}
	},
  render: function () {
  	console.log(this); // very very important
  	var name = this.props.name,
  	 	message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + ' and Use it with the String Concatenation!'}</p>
      </div>
    );
  }
});

var firstName = 'Dixit Patel';

// render the Component called Greeter , name is the prop is the HTML attribute
ReactDOM.render(
  <Greeter name={firstName} message={'Message from Props'} />,
  document.getElementById('app')
);

// props is short for properties, is the way to pass the data into your component