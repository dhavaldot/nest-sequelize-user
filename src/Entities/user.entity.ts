import { table } from 'console';
import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  PrimaryKey,
  BelongsTo,
  HasMany,
  ForeignKey,
  HasOne,
} from 'sequelize-typescript';
import { Job } from '.';
import { UserModel } from '../Models';

@Table
export default class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.SMALLINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  age: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  /*
   */
}
