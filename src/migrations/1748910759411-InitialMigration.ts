import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1748910759411 implements MigrationInterface {
    name = 'InitialMigration1748910759411'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, "usuarioId" integer, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_c9d8a1e413142a85d24fe8956ac" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_c9d8a1e413142a85d24fe8956ac"`);
        await queryRunner.query(`DROP TABLE "posts"`);
    }

}
