class Form {
    constructor(){
        this.input = createInput('Name');
        this.button = createButton('Play');
        this.greet = createElement('h3');
    }

    hideAll(){
        this.greet.hide();
        this.input.hide();
        this.button.hide();
    }

    display()
    {
        var title = createElement('h2');
        title.html('Car Race');
        title.position(130,0);

        this.input.position(150,150);
    
        this.button.position(250,250);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            Play.name = this.input.value();
            Play.index = playC;

            playC += 1;
            Play.updateCount(playC);
            Play.update();

            this.greet.html('hello ' + Play.name);
            this.greet.position(130,130);
        });
    }
};