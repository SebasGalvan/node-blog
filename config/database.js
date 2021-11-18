require('dotenv').config();


module.exports = {

    username : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE || "alkemy-blog",
    host : process.env.DB_HOST || "127.0.0.1",
    dialect : process.env.DB_DIALECT || "mysql",
    
    
    // Configuración de seeders
    seederStorage : 'sequelize',
    seederStorageTableName : 'seeds',

    // Configuración de migrations
    migrationStorage : 'sequelize',
    migrationStorageTableName : 'migrations',
}