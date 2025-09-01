class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    preload() {
        this.load.image('logo', 'assets/logo.png'); // coloca un logo de blue lock
    }

    create() {
        this.add.image(400, 150, 'logo').setScale(0.5);
        this.add.text(300, 250, "⚽ Blue Lock Game ⚽", { fontSize: '28px', fill: '#fff' });
        this.add.text(320, 320, "1. Historia", { fontSize: '22px', fill: '#0f0' })
            .setInteractive()
            .on('pointerdown', () => this.scene.start('HistoriaScene'));
        this.add.text(320, 360, "2. Liga Neo Egoísta", { fontSize: '22px', fill: '#0f0' })
            .setInteractive()
            .on('pointerdown', () => this.scene.start('LigaScene'));
        this.add.text(320, 400, "3. Arrodíllate ante mí Blue Lock", { fontSize: '22px', fill: '#0f0' })
            .setInteractive()
            .on('pointerdown', () => this.scene.start('ArrodillateScene'));
        this.add.text(320, 440, "4. El Pasado", { fontSize: '22px', fill: '#0f0' })
            .setInteractive()
            .on('pointerdown', () => this.scene.start('PasadoScene'));
    }
}

class HistoriaScene extends Phaser.Scene {
    constructor() { super('HistoriaScene'); }
    create() {
        this.add.text(100, 100, "Modo Historia: vive la historia de Isagi!", { fontSize: '20px', fill: '#fff' });
        this.add.text(100, 200, "Click para volver al menú").setInteractive()
            .on('pointerdown', () => this.scene.start('MenuScene'));
    }
}

class LigaScene extends Phaser.Scene {
    constructor() { super('LigaScene'); }
    create() {
        this.add.text(100, 100, "Liga Neo Egoísta: juega contra Bastard, Manshine, etc.", { fontSize: '20px', fill: '#fff' });
        this.add.text(100, 200, "Click para volver al menú").setInteractive()
            .on('pointerdown', () => this.scene.start('MenuScene'));
    }
}

class ArrodillateScene extends Phaser.Scene {
    constructor() { super('ArrodillateScene'); }
    create() {
        this.add.text(100, 100, "Modo Arrodíllate: si pierdes, reto especial!", { fontSize: '20px', fill: '#fff' });
        this.add.text(100, 200, "Click para volver al menú").setInteractive()
            .on('pointerdown', () => this.scene.start('MenuScene'));
    }
}

class PasadoScene extends Phaser.Scene {
    constructor() { super('PasadoScene'); }
    create() {
        this.add.text(100, 100, "El pasado de Ego: ¿qué hubiera pasado si ganó el mundial?", { fontSize: '20px', fill: '#fff' });
        this.add.text(100, 200, "Click para volver al menú").setInteractive()
            .on('pointerdown', () => this.scene.start('MenuScene'));
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [MenuScene, HistoriaScene, LigaScene, ArrodillateScene, PasadoScene]
};

new Phaser.Game(config);
