import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
export const Precheckin = sequelize.define('precheckin', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipoDocumento: {
        type: DataTypes.STRING,
    },
    documento: {    
        type: DataTypes.STRING
    },
    primerNombre: {
        type: DataTypes.STRING
    },
    segundoNombre: {
        type: DataTypes.STRING
    },
    primerApellido: {
        type: DataTypes.STRING
    },
    segundoApellido: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    pais: {
        type: DataTypes.STRING
    },
    ciudad: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    documento: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    paisOrigen: {
        type: DataTypes.STRING
    },
    ciudadOrigen: {
        type: DataTypes.STRING
    },
    paisDestino: {
        type: DataTypes.STRING
    },
    ciudadDestino: {
        type: DataTypes.STRING
    },
    huespedPrincipal: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    id_reserva: {
        type: DataTypes.INTEGER
    },
    id_reserva_habitacion: {
        type: DataTypes.INTEGER
    },
    nombre_tipo_habitacion: {
        type: DataTypes.STRING
    },
    id_check_in: {
        type: DataTypes.INTEGER
    },
    id_check_in_habitacion: {
        type: DataTypes.INTEGER
    },
    id_habitacion: {
        type: DataTypes.INTEGER
    },
    id_cliente: {
        type: DataTypes.INTEGER
    },
    fecha_ingreso: {
        type: DataTypes.STRING
    },
    fecha_salida: {
        type: DataTypes.STRING
    },
    id_pais_origen: {
        type: DataTypes.INTEGER
    },
    id_ciudad_origen: {
        type: DataTypes.INTEGER
    },
    id_pais_destino: {
        type: DataTypes.INTEGER
    },
    id_ciudad_destino: {
        type: DataTypes.INTEGER
    },
    id_relacion_huesped: {
        type: DataTypes.INTEGER
    },
    id_externo: {
        type: DataTypes.STRING
    },
    id_siat: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.STRING
    },
}, {
    timestamps: false // Desactiva createdAt y updatedAt
});

