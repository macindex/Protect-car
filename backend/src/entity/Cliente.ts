import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    telefone: string

    @Column()
    endereco: string

    @Column()
    evento: string

    @Column()
    password: string

}
