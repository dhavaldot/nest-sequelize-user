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
} from 'sequelize-typescript';
import { User } from '.';
import { JobModel } from '../Models';

@Table({
  tableName: 'Job',
})
export default class Job extends Model<JobModel> {
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

  // @HasMany(() => User, 'id')
  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
  })
  Uid: number;
}
