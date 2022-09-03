import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import '../.env'
import { SeederOptions } from 'typeorm-extension'
import { MainSeeder } from "./seeds/MainSeeder"

const port = process.env.DB_PORT as unknown as number | undefined

const options: DataSourceOptions & SeederOptions = { 
    type: 'postgres',
    host: process.env.DB_HOST,
    port: port,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logging: false,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    seeds: [MainSeeder],
} 

export const AppDataSource = new DataSource(options)
