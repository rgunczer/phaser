import Phaser from 'phaser';

export default class TitleScreen extends Phaser.Scene {
    preload() {
        console.log('TitleScreen:preload');
    }

    create() {
        const text = this.add.text(400, 300, 'The Pong Game');
        text.setOrigin(0.5, 0.5);
    }
}
