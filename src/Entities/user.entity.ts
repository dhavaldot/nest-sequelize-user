import { Field, ID, ObjectType } from '@nestjs/graphql';
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
@ObjectType()
export default class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.SMALLINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  @Field((type) => ID)
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field()
  name: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  @Field()
  age: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field()
  email: string;
}
