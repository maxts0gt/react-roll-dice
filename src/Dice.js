import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
	constructor(props) {
		super(props);
		// this.props = { randomDice: 'one' };
	}
	render() {
		return <i className={`fas fa-dice-${this.props.randomDice} ${this.props.text}`}></i>;
	}
}

export default Dice;
