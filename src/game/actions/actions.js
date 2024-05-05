import { checkForWin } from "../index.js";

export function sneak(game) {
    const {currentRoom, protagonist} = game;

    const room = game.dungeon[currentRoom];

    if(!room?.monsters) {
        return {...game, currentRoom: currentRoom + 1}
    }
    
    return checkForWin(game);
}