import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
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
@Table
@ObjectType()
@InputType('addUser')
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
    type: DataType.INTEGER,
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
