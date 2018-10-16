import Game from './game';

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    parent: 'game',
    scene: [Game]
};

const game = new Phaser.Game(config);

console.log(game);
