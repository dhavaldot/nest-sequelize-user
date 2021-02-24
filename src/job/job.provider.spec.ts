import { Test, TestingModule } from '@nestjs/testing';
import { JobProvider } from './job.provider';

describe('JobProvider', () => {
  let provider: JobProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobProvider],
    }).compile();

    provider = module.get<JobProvider>(JobProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
