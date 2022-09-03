const { MigrationInterface, QueryRunner, Table } = require("typeorm");

module.exports = class CreateClientes1662210596497 {

    async up(queryRunner) {
        await queryRunner.createTable(
            new Table({
                name: "clientes",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "endereco",
                        type: "varchar"
                    },
                    {
                        name: "evento",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        )
    }

    async down(queryRunner) {
        await queryRunner.dropTable("clientes");
    }

}
