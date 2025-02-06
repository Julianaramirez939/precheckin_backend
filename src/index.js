import app from './app.js';
import { sequelize } from './database/database.js';
import './models/Precheckin.js';

async function main() {
    try {
        // await sequelize.authenticate();
        // console.log('Connection has been established successfully.');
        
        // Sincroniza las tablas con los modelos
       

        // Inicia el servidor
        const server = app.listen(4000, () => {
            console.log('Server is listening on port', 4000);
        });

        // Maneja el evento SIGINT para cerrar el servidor de manera limpia

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();
