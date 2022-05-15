import { Test, TestingModule } from '@nestjs/testing';
import { GetNameService } from './get-name.service';

describe('GetNameService', () => {
  let service: GetNameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetNameService],
    }).compile();

    service = module.get<GetNameService>(GetNameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
