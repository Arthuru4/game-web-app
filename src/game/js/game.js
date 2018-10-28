import editConfig from '../../../config/config';

class Game extends Phaser.Scene {
    constructor() {
        super('GameScene');
        this.gamePatch = `../${editConfig.gamePath.toValue(editConfig.gameName)}/assets/`;
        // this.assetsChecker = new LoadAssetsManager(this.gamePatch, this.gamePatch);
    }

    preload() {
        this.gameConfig = editConfig || null;

        if (editConfig.gameName && editConfig.gamePath) {
            this.load.json('assetPack', `${this.gamePatch}asset-pack.json`, true);
            this.load.path = this.gamePatch;
        }

        this.load.image('img', 'img/sprite.png');
    }

    create() {
        this.assetPackJson = this.cache.json.get('assetPack');

        // TODO: load in preload
        // Object.keys(this.assetPackJson).forEach((arr) => {
        //     for (let i = 0; i < this.assetPackJson[arr].length; i++) {
        //         // IF NOT IGNORED IN ASSET-PACK
        //         this.load.image(this.assetPackJson[arr][i].key, this.assetPackJson[arr][i].url);
        //     }
        // });

        if (this.gameConfig.gameName === 'tanks') this.add.image(100, 100, 'img');

        // TODO: HERE NEED TO CALL GAME's (tanks) game.js
    }
}

export default Game;
