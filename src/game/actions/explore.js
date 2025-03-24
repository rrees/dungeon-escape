import {checkForWin} from "../index.js";

export function explore(game) {
    const currentRoom = game.currentRoom;

    if (currentRoom < game.dungeon.rooms.length - 1) {
        game.currentRoom += 1;
    }

    return checkForWin(game);
}