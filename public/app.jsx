var Greeter = React.createClass({
  render: function () {
  	console.log(this); // very very important
  	var name = this.props.name;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>This is form a component!</p>
      </div>
    );
  }
});

// render the Component called Greeter , name is the prop is the HTML attribute
ReactDOM.render(
  <Greeter name={'ProTek'} />,
  document.getElementById('app')
);

// props is short for properties, is the way to pass the data into your component