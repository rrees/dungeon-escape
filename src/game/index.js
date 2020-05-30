
export function createGame() {
	return {
		dungeon: {
			name: "Crypt of Despair",
			rooms: [
				{
					name: "The Pit"
				},
				{
					name: "The Underground River",
				},
				{
					name: "The Throne Room"
				}
			],
			currentRoom: 0,
			complete: false,
		}
	}
}

export function explore(game) {
	let currentRoom = game.dungeon.currentRoom;

	if(currentRoom < game.dungeon.rooms.length - 1) {
	 game.dungeon.currentRoom = currentRoom + 1;
	} else {
		game.complete = true;
	}

	return game;
}