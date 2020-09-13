class Player {
    constructor(){}

    readCount(){
        var refCount = db.ref('playC');
        refCount.on("value",function(data){
            playC = data.val();
        });
    }

    updateCount(count){
        db.ref('/').update({
            playC:count
        });
    }

    update(name){
        var playerIndex = 'play' + playC;
        db.ref(playerIndex).set({
            name:name
        });
    }
}