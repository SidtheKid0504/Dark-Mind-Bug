class Enemy extends ObstBaseClass {
    constructor(x, y) {
        super(x, y);
        this.image = loadImage("images/enemyFrames/enemyWalk1.png");
        this.visibility = 0;
    }

    display() {

        if (gameState === "PLAY1") {
            if (this.body.x - player.getPlayerSprite().x <= 10) {
                push();
                this.visibility += 10;
                //tint(255, this.visibility);
                //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
                //console.log(this.body.position.x);
                super.display();
                pop();
            }
        }
    }
}