class Player {
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = null;
    }

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

    update(){
        var playerIndex = 'players/play' + this.index;
        db.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        });
    }

    getCarsAtEnd(){
        var refCount = db.ref('carsAtEnd');
        refCount.on("value",(data)=>{
            this.rank = data.val();
        });
    }

    static updateCarsAtEnd(rank){
        db.ref('/').update(
            {
                carsAtEnd : rank
            }
        );
    }

    static playerInfo() {
        var info = db.ref('players');
        info.on("value",(data)=>{
            allPlayer = data.val();
        });
    }
}