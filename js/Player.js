class Player {
    constructor(){
        this.player = createSprite(200, 700, 50, 50);
        this.image = loadImage('images/playerFrames/Stand.png');
    }

    playerMove() {
        if (keyDown("d")) {
            this.player.x += 10;
            this.image = loadImage("images/playerFrames/PFrame1.png");
        } else if (keyDown("a")) {
            this.player.x -= 10;
            this.image = loadImage("images/playerFrames/PFrame1.png");
        } else {
            this.image = loadImage("images/playerFrames/Stand.png");
        }

        // console.log(this.player.x);
        // 3,990 x value for End

        this.player.y+=18;
        this.player.collide(ground);

        if (keyDown("space")) {
            this.player.y -= 50;
        }
        camera.position.x = this.player.x;
        camera.position.y = displayHeight/2;
    }

    getPlayerSprite() {
        return this.player;
    }

    display() {
        this.player.addImage(this.image);  
        this.player.scale = 0.5;
    }
}