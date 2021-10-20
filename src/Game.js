import React, { Component } from 'react';
import Roll from './Roll.js';
import './Game.css';

class Game extends Component {
	render() {
		return (
			<div>
				<h1 className='header'>Play Dice!</h1>

				<Roll />
			</div>
		);
	}
}

export default Game;
