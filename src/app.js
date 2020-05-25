import { h, Component } from 'preact';

import { Game } from './Game.js';

export class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <Game {...this.props}/>;
	}
} 