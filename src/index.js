import app from './app.js';
import { sequelize } from './database/database.js';
import './models/Precheckin.js';

async function main() {
    try {
        // await sequelize.authenticate();
        // console.log('Connection has been established successfully.');
        
        // Sincroniza las tablas con los modelos
        await sequelize.sync({ alter: true });
        console.log('Tablas sincronizadas correctamente.');

        // Inicia el servidor
        const server = app.listen(3000, () => {
            console.log('Server is listening on port', 3000);
        });

        // Maneja el evento SIGINT para cerrar el servidor de manera limpia
        process.on('SIGINT', () => {
            console.log('Shutting down the server...');
            server.close(() => {
                console.log('Server closed gracefully.');
                process.exit(0); // Finaliza el proceso correctamente
            });
        });

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();
