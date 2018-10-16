class Game extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        this.load.image('img', '../src/game/assets/sprites/sprite.png');
    }

    create() {
        this.add.image(100, 100, 'img');
    }
}

export default Game;
