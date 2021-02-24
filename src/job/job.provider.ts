import { Job } from '../Entities';
import { Constant } from '../constants';

export const JobProviders = [
  {
    provide: Constant.JOB_REPOSITORY,
    useValue: Job,
  },
];
