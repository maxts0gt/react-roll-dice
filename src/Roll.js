import React, { Component } from 'react';
import Dice from './Dice.js';
import './Roll.css';

class Roll extends Component {
	constructor(props) {
		super(props);
		this.state = { text: 'Roll' };
		this.handleClick = this.handleClick.bind(this);
		this.dices = ['one', 'two', 'three', 'four', 'five', 'six'];
		this.randomDiceOne = this.dices[Math.floor(Math.random() * this.dices.length)];
		this.randomDiceTwo = this.dices[Math.floor(Math.random() * this.dices.length)];
	}

	handleClick(e) {
		this.setState({ text: 'Rolling...' });
		setTimeout(() => {
			this.randomDiceOne = this.dices[Math.floor(Math.random() * this.dices.length)];
			this.randomDiceTwo = this.dices[Math.floor(Math.random() * this.dices.length)];
			this.setState({ text: 'Roll' });
		}, 1000);
	}
	render() {
		return (
			<div>
				<div>
					<Dice
						text={this.state.text === 'Rolling...' ? 'Rolling' : 'Roll'}
						randomDice={this.randomDiceOne}
					/>
					<Dice
						text={this.state.text === 'Rolling...' ? 'Rolling' : 'Roll'}
						randomDice={this.randomDiceTwo}
					/>
				</div>
				<button className='btn btn-dark' onClick={this.handleClick}>
					{this.state.text}
				</button>
			</div>
		);
	}
}

export default Roll;
