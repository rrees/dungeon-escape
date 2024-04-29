
export function sneak(game) {
    const {currentRoom, monsters} = game;
    if(!monsters) {
        return {...game, currentRoom: currentRoom + 1}
    }
    return game;
}