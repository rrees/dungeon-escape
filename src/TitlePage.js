import { h } from 'preact';

export function TitlePage(props) {
	return <div id="title-page">
		<p>Try to escape the dungeon</p>
		<p><button onclick={props.beginGame}>Begin the escape</button></p>
		</div>;
}