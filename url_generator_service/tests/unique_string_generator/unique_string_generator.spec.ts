import { ConcurrentRequestOffsetGenerator } from '../../src/interfaces/concurrent_request_offset_generator.interface';
import { UniqueStringGenerator } from '../../src/unique_string_generator/unique_string_generator';

describe('tests for class UniqueStringGenerator', () => {
  let concurrentRequestOffsetGenerator: ConcurrentRequestOffsetGenerator;
  let uniqueStringGenerator: UniqueStringGenerator;
  beforeEach(() => {
    concurrentRequestOffsetGenerator = {
      getRequestoffset: jest.fn(async (): Promise<number> => 0),
    };
    uniqueStringGenerator = new UniqueStringGenerator(
      concurrentRequestOffsetGenerator,
      1,
    );
  });

  it('getUniqueString method', async () => {
    const val = await uniqueStringGenerator.getUniqueString();
    const getRequestoffsetSpy = jest.spyOn(
      concurrentRequestOffsetGenerator,
      'getRequestoffset',
    );
    console.log(val);
    expect(getRequestoffsetSpy).toHaveBeenCalled();
    expect(getRequestoffsetSpy).toHaveReturnedWith(Promise.resolve(0));
    expect(val).not.toBeUndefined();
    expect(val.length).toBeGreaterThan(0);
    expect(val.length).toBeLessThanOrEqual(10);
  });
});
