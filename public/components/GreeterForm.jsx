var React = require('react');

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

module.exports = GreeterForm;
