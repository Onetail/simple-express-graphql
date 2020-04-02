import { Table, Column, Model } from "sequelize-typescript";

@Table({
  tableName: "users"
})
export class User extends Model<User> {
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @Column
  email: string;

}
