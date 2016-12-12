var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');


const _ById = (id) => document.getElementById(id);

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
