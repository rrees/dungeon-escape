
import { h, Component } from 'preact';

import { TitlePage } from './TitlePage.js';
import { DungeonPage } from './DungeonPage.js';
import { VictoryPage } from './VictoryPage.js';

function ShowPage(props) {
	if(props.uiState === 'playing') {
		return <DungeonPage explore={() => props.action('explore')} />;
	}

	if(props.uiState == 'won') {
		return <VictoryPage playAgain={() => props.action('begin')} />;
	}

	return <TitlePage beginGame={() => props.action('begin')}/>;
}

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

		switch(action) {
			case 'begin':
				this.setState({
					uiState: 'playing'
				});
				break;
			case 'explore':
				this.setState({
					uiState: 'won'
				});
				break;
		}
	}

	render() {
		return <div id="game">
		<ShowPage uiState={this.state.uiState} action={this.gameAction}/>
    	</div>;
	}
} 