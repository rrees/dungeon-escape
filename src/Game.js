import {h, Component} from 'preact';
import {html} from 'htm/preact';

import {GamePage} from './GamePage.js';

import {createGame} from './game/index.js';
import {explore} from './game/actions/explore.js';

export class Game extends Component {
	constructor(props) {
		super(props);

		this.gameAction = this.gameAction.bind(this);

		this.state = {
			uiState: 'title',
		};
	}

	gameAction(action) {
		console.log('Action', action);

		switch (action) {
			case 'begin':
				this.setState({
					uiState: 'playing',
					game: createGame(),
				});
				break;
			case 'explore':
				const nextGameState = explore(this.state.game);
				console.log(nextGameState);
				const uiState = nextGameState.complete ? 'won' : 'playing';

				this.setState({
					uiState: uiState,
					game: nextGameState,
				});
				break;
		}
	}

	render() {
		return html`
			<div id="game">
				<${GamePage}
					uiState=${this.state.uiState}
					game=${this.state.game}
					action=${this.gameAction}/>
			</div>`;
	}
} 