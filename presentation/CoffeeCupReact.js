import React, { Component } from 'react'

const cupImage = require("../assets/coffeecup.png");

class CoffeeCupReact extends Component {
	 constructor() {
	 	super();
	 	this.state = { caffeineAmount: { cups: 0} }
	 }

	moreCaffeine = () => {
		this.setState({
			caffeineAmount: {
				cups: this.state.caffeineAmount.cups + 1
			}
		})
	}

	render() {
		return (
			<div>
				<img 
					src={cupImage} 
					height="250px"
					onClick={ this.moreCaffeine } />
				<h2 style={{color: 'white'}}>{ this.state.caffeineAmount.cups }</h2>
			</div>
		)
	}
}

export { CoffeeCupReact as default };