const Modelo = require('../modeloTabelaUser.js');

module.exports = {
    listar(){
        return Modelo.findAll();
    },

    async validateLogin(username, password){
        const login = await Modelo.findOne({
            where: {
                username: username, 
                password: password
            }
        })

        if(!login)
            return false
        
        return login
    },

    inserir(users){
        return Modelo.create(users)
    }
}