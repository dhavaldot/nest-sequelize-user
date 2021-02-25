import { table } from 'console';
import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  HasMany,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { User } from '.';
import { JobModel } from '../Models';

@Table
export default class Job extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  salary: number;

  // @ForeignKey(() => User)
  @Column
  Uid: number;
  /* 
  @HasOne(() => User)
  user: User;
 */
  @BelongsTo(() => User, 'id')
  user: User;

  /* @ForeignKey(() => User)
  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
  })
  Uid: number; */
}
