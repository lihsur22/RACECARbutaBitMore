class Form {
    constructor(){}

    display()
    {
        var title = createElement('h2');
        title.html('Car Race');
        title.position(130,0);

        var input = createInput('name');
        var button = createButton('play');

        input.position(150,150);
    
        button.position(250,250);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            
            var name = input.value();
            
            playC += 1;
            Play.update(name);
            Play.updateCount(playC);
            var greet = createElement('h3');
            greet.html('hello ' + name);
            greet.position(130,130);
        });

        console.log("form");
    }
};