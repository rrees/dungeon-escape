import { h } from 'preact';

export function DungeonPage(props) {
	return <div id="dungeon">
		<p>You are in the dungeon</p>
		<p><button onclick={props.explore}>Explore the dungeon</button></p>
		</div>;
}