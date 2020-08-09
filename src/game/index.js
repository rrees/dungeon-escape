import {createDungeon as PitOfDespair} from './dungeons/PitOfDespair.js';
export function createGame() {
	const dungeon =  PitOfDespair();
	const gameVariables = {
		currentRoom: 0,
		complete: false,
	};
	return Object.assign(gameVariables, dungeon);
}

export function explore(game) {
	let currentRoom = game.currentRoom;

	if(currentRoom < game.dungeon.rooms.length - 1) {
	 game.currentRoom = currentRoom + 1;
	} else {
		game.complete = true;
	}

	return game;
}