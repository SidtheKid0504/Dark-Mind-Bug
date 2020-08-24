class Menu {
    constructor() {
        this.title = createElement("h1");
        this.playButton = createButton("Enter the Void"); 
    }

    display() {
        this.title.html("Dark Mind");
        this.title.position(displayWidth/2, 40);

        this.playButton.position(displayWidth/2, 200);
        this.playButton.mousePressed(() => {
            gameState = "PLAY1";
            this.title.hide();
            this.playButton.hide();
        });
    }
}