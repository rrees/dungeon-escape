import {createDungeon} from './dungeons/index.js';

export function createGame() {
	const dungeon =  createDungeon();
	const gameVariables = {
		currentRoom: 0,
		complete: false,
	};

	const protagonist = new Protagonist();
	return Object.assign(gameVariables, dungeon, protagonist);
}

export function checkForWin(game) {
	if(game.currentRoom === game.dungeon.rooms.length) {
		game.complete = true;
	}
	return game;
}

export function explore(game) {
	const currentRoom = game.currentRoom;

	if(currentRoom < game.dungeon.rooms.length - 1) {
		game.currentRoom += 1;
	}

	return checkForWin(game);
}