const TabelaUser = require('./siteClube/TabelaUser')

class Users {
    constructor({username, password, date_added}){
        this.username = username;
        this.password = password;
        this.date_added = date_added;
    }

    async criar(){
        const resultado = await TabelaUser.inserir({
            username: this.username,
            password: this.password,
            date_added: this.date_added
        })

        this.id = resultado.id;
        this.username = resultado.username;
        this.password = resultado.password;
        this.date_added = resultado.date_added;
    }
}

module.exports = Users