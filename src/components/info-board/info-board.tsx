import React from 'react';

import IInfoBoardProps from './interfaces/info-board-props';

import playerLeft from '../../images/player-left.png';
import playerRight from '../../images/player-right.png';

import './styles/info-board.scss';

export default class InfoBoard extends React.Component<IInfoBoardProps, {}> {

	public render() {
		return <div className="info-board">
			<div className="info-board-header">
				<img src={ playerRight } alt="player" />
				<span className="header-text">Frogger</span>
				<img src={playerLeft } alt="player" />
			</div>

			{ this.props.gameOver && <div className="game-over-area">
				<div className="game-over-title">Game Over</div>
				<div className="game-over-text">You scored { this.props.score }, better luck next time!</div>
			</div> }

			<div className="info-board-instructions">
				<ul>
					<li>You control Frogger, guiding him in four directions with the joystick.</li>
					<li>You must guide Frogger to each of the five empty slots at the top of the screen in order to advance to the next stage.</li>
					<li>You start at the bottom of the screen beneath five lanes of traffic.</li>
					<li>You must reach the sidewalk in the middle of the screen without getting hit by any vehicles.</li>
					<li>You must not fall in the water on the way to one of the slots at the top. Ride the turtles and logs to the top, but don't get pulled off the side of the screen.</li>
					<li>Beware of diving turtles. If Frogger is on them when they dive, he loses a life.</li>
					<li>Avoid crocodile mouths, catch flies in the slots for bonus points, and bring the lady frog to your home for more bonus points.</li>
				</ul>
			</div>

			<div className="button-area">
				<button type="button" onClick={ this.props.startGame }>Play Game</button>
			</div>
		</div>
	}
}
