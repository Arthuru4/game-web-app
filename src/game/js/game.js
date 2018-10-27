import editConfig from '../../../config/config';

class Game extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        this.gameConfig = editConfig || null;

        if (editConfig.gameName && editConfig.gamePath) {
            this.load.json('assetPack', `../${this.gameConfig.gamePath.toValue(this.gameConfig.gameName)}/assets/asset-pack.json`, true);
        }

        this.load.image('img', '../src/game/assets/sprites/sprite.png');
    }

    create() {
        // TODO: HERE NEED TO PARSE ALL JSON KEYS
        this.assetPackJson = this.cache.json.get('assetPack');

        if (this.gameConfig.gameName === 'tanks') this.add.image(100, 100, 'img');

        // TODO: HERE NEED TO CALL GAME's (tanks) game.js
    }
}

export default Game;
