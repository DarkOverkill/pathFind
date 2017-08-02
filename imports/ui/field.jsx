import React, { Component } from 'react';

import Cell from './cell.jsx';

export default class Field extends Component {
	constructor(){
		super();

		this.state = {
			playerPosition: 0
		}
		this.move = this.move.bind(this);
	}


	componentWillMount() {
		window.addEventListener('keydown', this.move);
	}


	componentWillUnmount() {
		window.removeEventListener('keydown', this.move);
	}


	move(e) {
		let playerOffset = 0;
		let moveX = 0, moveY = 0;
		switch(e.key) {
			case 'ArrowDown':
				playerOffset = 10;
				moveY = 1;
				break;
			case 'ArrowUp':
				playerOffset = -10;
				moveY = -1;
				break;
			case 'ArrowRight':
				moveX = 1;
				playerOffset = 1;
				break;
			case 'ArrowLeft':
				moveX = -1;
				playerOffset = -1;
				break;
		}
		const player = $('[data-player=true]');
		const currentPlayerPosition = player.attr('data-cellId');
		const playerX = Number(player.attr('x')) + moveX;
		const playerY = Number(player.attr('y')) + moveY;
		console.log(playerX, '===', playerY)
		if (playerX < 0 || playerX + 1 > this.props.width || playerY < 0 || playerY + 1 > this.props.width) return;
		const movePlayerPosition = 'y' + playerY + 'x' + playerX;
		const obstacle = $(`[data-cellid=${movePlayerPosition}]`).attr('data-obstacle') === 'true';
		if (obstacle) return;
		this.refs['cell' + currentPlayerPosition].removeOldPlayerPosition();
		this.refs['cell' + movePlayerPosition].setNewPlayerPosition();
	}


	renderCells() {
		let cells = [];
		const fieldSize = this.props.width;
		for (y = 0; y < fieldSize; y++) {
			for (x = 0; x < fieldSize; x++) {
				cells.push(<Cell key={'y' + y + 'x' + x} cellId={'y' + y + 'x' + x} player={this.state.playerPosition === x + y} x={x} y={y} ref={'cell' + 'y' + y + 'x' +  x} />);
			}
		}
		return cells;
	}


	render() {
		return (
			<div className='container' style={styles.container}>
				{this.renderCells()}
			</div>
		);
	}
}
  const styles = {
		container: {
			height: '600px',
			width: '600px'
		}
	}
