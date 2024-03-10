import { h } from 'preact';
import { html } from 'htm/preact';

export function VictoryPage(props) {
	return html`<div id="victory-page">
		<p>You have beaten the dungeon! Congratulations hero!</p>
		<p><button onclick=${props.playAgain}>Try again</button></p>
		</div>`;
}