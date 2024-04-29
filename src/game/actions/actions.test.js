import {describe, it} from 'node:test';

import {default as  assert} from 'node:assert';

import {sneak} from './actions.js';

describe('Sneaking', () => {
    it('is unnecessary if there is no monsters present', () => {
        const game = {
            currentRoom: 1
        };

        const nextGameState = sneak(game);

        assert.equal(nextGameState.currentRoom, game.currentRoom + 1);
    });
});