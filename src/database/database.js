import { Sequelize } from "sequelize";

export const sequelize= new Sequelize (
    'dev_hcmonteria',
    'postgres',
    '1234',
    {
    host: 'localhost',
    dialect: 'postgres',
    }
);