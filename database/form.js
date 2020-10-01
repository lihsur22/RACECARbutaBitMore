class Form {
    constructor(){
        this.input = createInput('Name');
        this.button = createButton('Play');
        this.greet = createElement('h3');
        this.reset = createButton('Reset');
        this.congr = createElement('h1');
    }

    hideAll(){
        this.greet.hide();
        this.input.hide();
        this.button.hide();
    }

    display()
    {
        var title = createElement('h1');
        title.html('Car Race');
        title.position((displayWidth/2) - 50,0);

        this.reset.position(20,30);
        this.reset.mousePressed(()=>{
            game.update(0);
            Play.updateCount(0);
            Player.updateCarsAtEnd(0);
        });
        
        this.congr.html('Congratulations\nYour Rank Was ' + Play.rank);
        this.congr.position(displayWidth/2,displayHeight/2);
        this.congr.hide();

        this.input.position((displayWidth/2) - 50,(displayHeight/2) - 400);
    
        this.button.position((displayWidth/2) + 30,(displayHeight/2) - 300);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            Play.name = this.input.value();
            Play.index = playC;

            playC += 1;
            Play.updateCount(playC);
            Play.update();

            this.greet.html('hello ' + Play.name);
            this.greet.position((displayWidth/2) + 30,(displayHeight/4));
        });
    }
};