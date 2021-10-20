import React, { Component } from 'react';
import Dice from './Dice.js';
import './Roll.css';

class Roll extends Component {
	static defaultProps = {
		sides: ['one', 'two', 'three', 'four', 'five', 'six'],
	};
	constructor(props) {
		super(props);
		this.state = { text: 'Roll', die1: 'one', die2: 'two' };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({ text: 'Rolling...' });
		setTimeout(() => {
			const newDieOne = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
			const newDieTwo = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
			this.setState({ text: 'Roll', die1: newDieOne, die2: newDieTwo });
		}, 1000);
	}
	render() {
		return (
			<div>
				<div>
					<Dice text={this.state.text === 'Rolling...' ? 'Rolling' : 'Roll'} randomDice={this.state.die1} />
					<Dice text={this.state.text === 'Rolling...' ? 'Rolling' : 'Roll'} randomDice={this.state.die2} />
				</div>
				<button className='btn btn-dark' onClick={this.handleClick}>
					{this.state.text}
				</button>
			</div>
		);
	}
}

export default Roll; 
