import { h } from 'preact';
import { html } from 'htm/preact';

export function TitlePage(props) {
	return html`<div id="title-page">
		<p>Try to escape the dungeon</p>
		<p><button onclick=${props.beginGame}>Begin the escape</button></p>
		</div>`;
}