import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Cliente } from "../entity/Cliente";
import bcrypt from 'bcrypt'

export class ClienteSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
        const clienteRepository = dataSource.getRepository(Cliente)

        const clienteData = {
            nome: 'Claudio holanda',
            telefone: '8198698687',
            endereco: 'Rua dos bobos',
            evento: 'asdf oiabsdfob obasdfobobasd ',
            password: await bcrypt.hash('teste', 10),
        }

        const newCliente = clienteRepository.create(clienteData)
        await clienteRepository.save(newCliente)
    }
}

