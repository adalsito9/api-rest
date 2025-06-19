const config = require('./configuracion');
const mongoose = require('mongoose'); 

module.exports = {
    connection: null,
    connect: function () {
        if (this.connection) return this.connection;
        return mongoose.connect(config.DB)
            .then((conn) => {
                this.connection = conn;
                console.log('Conexión exitosa a la base de datos');
                return conn;
            })
            .catch((e) => {
                console.error(`Error al conectar a la base de datos: ${e}`);
            });
    }
};