const database = require("./database-connection");

module.exports = {
    list(){
        return database('game')
            .then(games => games)
    },
    read(id){
        return database('game')
            .where('id', id)
            .then(game => game[0])
    },
    create(game){
        return database('game')
            .insert(game, '*')
            .then(game => game[0])
    },
    update(id, game){
        return database('game')
            .where('id', id)
            .update(game, '*')
            .then(game => game[0])
    },
    delete(id){
        return database('game')
            .where('id', id)
            .del()
    }
};
