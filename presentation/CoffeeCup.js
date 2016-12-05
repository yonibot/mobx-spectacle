import React, { Component } from 'react'
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

const cupImage = require("../assets/coffeecup.png");

@observer
class CoffeeCup extends Component {
	@observable caffeineAmount = {cups: 0}

	moreCaffeine = () => {
		this.caffeineAmount.cups++;
	}

	@computed get cupAmount() {
		return `${ this.caffeineAmount.cups } cups of coffee.`
	}

	@computed get message() {
		let { cups } = this.caffeineAmount;
		switch(true) {
			case (cups < 1):
				return '*Yawn* Sure am tired.';
			case (cups < 3):
				return 'Much better!';
			case (cups < 5):
				return '-- normal --';
			default:
				return "Whoah!! Slow down there partner!"
		}
	}

	render() {
		return (
			<div>
				<img 
					src={cupImage} 
					height="250px"
					onClick={ this.moreCaffeine } />
				<h2 style={{color: 'white'}}>{ this.cupAmount }</h2>
				<h4>{ this.message }</h4>
				<DevTools />
			</div>
		)
	}
}

export { CoffeeCup as default };