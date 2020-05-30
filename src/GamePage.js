
import { h } from 'preact';


import { TitlePage } from './TitlePage.js';
import { DungeonPage } from './DungeonPage.js';
import { VictoryPage } from './VictoryPage.js';

export function GamePage(props) {
	function explore() {
		props.action('explore');
	}

	if(props.uiState === 'playing') {
		return <DungeonPage
			explore={explore}
			game = {props.game} />;
	}

	if(props.uiState == 'won') {
		return <VictoryPage playAgain={() => props.action('begin')} />;
	}

	return <TitlePage beginGame={() => props.action('begin')}/>;
}
