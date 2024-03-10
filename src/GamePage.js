import { h } from 'preact';
import { html } from 'htm/preact';

import { TitlePage } from './TitlePage.js';
import { DungeonPage } from './DungeonPage.js';
import { VictoryPage } from './VictoryPage.js';

export function GamePage(props) {
	function explore() {
		props.action('explore');
	}

	if(props.uiState === 'playing') {
		return html`<${DungeonPage}
			explore=${explore}
			game=${props.game} />`;
	}

	if(props.uiState == 'won') {
		return html`<${VictoryPage} playAgain=${() => props.action('begin')} />`;
	}

	return html`<${TitlePage} beginGame=${() => props.action('begin')}/>`;
}
