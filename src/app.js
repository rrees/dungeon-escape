import { h, Component } from 'preact';
import { html } from 'htm/preact';

import { Game } from './Game.js';

export class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return html`<${Game} {...this.props}/>`;
	}
} 