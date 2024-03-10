import {createDungeon} from './dungeons/index.js';

export function createGame() {
	const dungeon =  createDungeon();
	const gameVariables = {
		currentRoom: 0,
		complete: false,
	};
	return Object.assign(gameVariables, dungeon);
}

export function explore(game) {
	const currentRoom = game.currentRoom;

	if(currentRoom < game.dungeon.rooms.length - 1) {
	 game.currentRoom = currentRoom + 1;
	} else {
		game.complete = true;
	}

	return game;
}