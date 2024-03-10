import { h } from 'preact';
import { html } from 'htm/preact';

export function DungeonPage(props) {
	const currentRoom = props.game.dungeon.rooms[props.game.currentRoom];

	return html`<div id="dungeon">
		<h2>${props.game.dungeon.name}</h2>
		<p>You are in ${currentRoom.name}</p>
		<p><button onclick=${props.explore}>Explore the dungeon</button></p>
		</div>`;
}