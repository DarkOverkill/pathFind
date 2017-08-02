import React, { Component, PropTypes } from 'react';

export default class Cell extends Component {
	constructor(props) {
		super(props);

		this.state = {
			obstacle: false,
			player: this.props.player
		}
		this.removeOldPlayerPosition = this.removeOldPlayerPosition.bind(this);
		this.setNewPlayerPosition = this.setNewPlayerPosition.bind(this);
	}


	componentWillMount() {
	}


	componentWillUnmount() {
	}


	removeOldPlayerPosition() {
		this.setState({player: false});
	}


	setNewPlayerPosition() {
		this.setState({player: true});
	}



	setObstacle() {
		this.setState({obstacle: !this.state.obstacle});
		console.log('in cell click', this.state);
	}

	render() {
		const {x, y, cellId} = this.props;
		let bgColor = this.state.obstacle ? 'black' : 'white';
		if (this.state.player) bgColor = 'red';		
		return (
			<div data-player={this.state.player} data-cellId={cellId} style={{backgroundColor: bgColor}} className='block' data-obstacle={this.state.obstacle} onClick={this.setObstacle.bind(this)} x={x} y={y}>{cellId}</div>
		);
	}
}

