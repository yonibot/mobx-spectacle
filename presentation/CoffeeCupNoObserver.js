import React, { Component } from 'react'
import { observable, computed } from 'mobx';
import DevTools from 'mobx-react-devtools';

const cupImage = require("../assets/coffeecup.png");

class CoffeeCupNoObserver extends Component {
	@observable caffeineAmount = {cups: 0}

	moreCaffeine = () => {
		this.caffeineAmount.cups++;
	}

	render() {
		return (
			<div>
				<img 
					src={cupImage} 
					height="250px"
					onClick={ this.moreCaffeine } />
				<h2 style={{color: 'white'}}>{ this.caffeineAmount.cups }</h2>
				<DevTools />
			</div>
		)
	}
}

export { CoffeeCupNoObserver as default };