import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuarios")
export class Usuarios {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    name: string

    @Column({unique:true})
    email: string

    @Column()
    password: string

}