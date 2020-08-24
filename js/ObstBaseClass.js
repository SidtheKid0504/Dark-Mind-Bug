class ObstBaseClass {
    constructor(x, y) {
        this.body = createSprite(x, y, 200, 200);
        this.image = loadImage('images/baseImg.png');
    }

    damagePlayer(playerObj) {
        if (this.body.isTouching(playerObj)) {
            fill(255);
            text("You Lose", displayWidth / 2, displayHeight/2);
        }
    }

    display() {
        this.body.addImage(this.image);
        this.body.scale = 0.5;
    }
}