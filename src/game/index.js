import {createDungeon} from './dungeons/index.js';
import {Protagonist} from './Protagonist.js';

export function createGame() {
	const dungeon = createDungeon();
	const gameVariables = {
		currentRoom: 0,
		complete: false,
	};

	const protagonist = new Protagonist();
	return Object.assign(gameVariables, dungeon, protagonist);
}

export function checkForWin(game) {
	if (game.currentRoom >= game.dungeon.rooms.length - 1) {
		game.complete = true;
	}
	return game;
}