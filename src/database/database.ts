import { Sequelize } from 'sequelize-typescript';
import { Job, User } from 'src/Entities';

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'dhaval',
        password: 'dhaval',
        database: 'postgres',
      });
      sequelize.addModels([User, Job]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
