import { User } from '../Entities';
import { Constant } from '../constants';

export const usersProviders = [
  {
    provide: Constant.USER_REPOSITORY,
    useValue: User,
  },
];
