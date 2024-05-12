class Layer {
    constructor(game, width, height, speedModifier, image) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.speedModifier = speedModifier;
        this.image = image;
        this.x = 0;
        this.y = 0;
    }
    update() {
        if (this.x < -this.width) this.x = 0;
        else this.x -= this.game.speed * this.speedModifier;
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
    
};

export class Background {
    constructor(game) {
        this.game = game;
        this.width = 1667;
        this.height = 500;
        this.background = document.getElementsByTagName('img');
        this.layera = new Layer(this.game, this.width, this.height, 0.5, this.background[8]);
        this.layer1 = new Layer(this.game, this.width, this.height, 0.5, this.background[9]);
        this.layer2 = new Layer(this.game, this.width, this.height, 0.5, this.background[10]);
        this.layer3 = new Layer(this.game, this.width, this.height, 0.3, this.background[11]);
        this.layer4 = new Layer(this.game, this.width, this.height, 0.5, this.background[12]);
        this.layer5 = new Layer(this.game, this.width, this.height, 0.2, this.background[13]);
        this.layer6 = new Layer(this.game, this.width, this.height, 0.2, this.background[14]);
        this.layer7 = new Layer(this.game, this.width, this.height, 0.3, this.background[15]);
        this.layer8 = new Layer(this.game, this.width, this.height, 0.1, this.background[16]);
        this.layer9 = new Layer(this.game, this.width, this.height, 0, this.background[17]);
        this.layer10 = new Layer(this.game, this.width, this.height, 0, this.background[18]);
        this.layer11 = new Layer(this.game, this.width, this.height, 0, this.background[19]);
        this.backgroundLayers = [this.layer11, this.layer10, this.layer9, this.layer8, this.layer7, this.layer6, this.layer5, this.layer4, this.layer3, this.layer2, this.layer1, this.layera];
    }
    update() {
        this.backgroundLayers.forEach(layer => {
            layer.update();
        })
    }
    draw(context) {
        this.backgroundLayers.forEach(layer => {
            layer.draw(context);
        })
    }
}


