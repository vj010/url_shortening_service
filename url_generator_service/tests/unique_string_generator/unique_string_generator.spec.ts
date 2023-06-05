import { ConcurrentRequestOffsetGenerator } from '../../src/interfaces/concurrent_request_offset_generator.interface';
import { UniqueStringGenerator } from '../../src/unique_string_generator/unique_string_generator';

describe('tests for class UniqueStringGenerator', () => {
  let concurrentRequestOffsetGenerator: ConcurrentRequestOffsetGenerator;
  let uniqueStringGenerator: UniqueStringGenerator;
  // beforeAll(() => {
  //   concurrentRequestOffsetGenerator = {
  //     getRequestoffset: async (): Promise<number> => {
  //       return 1;
  //     },
  //   };
  //   uniqueStringGenerator = new UniqueStringGenerator(
  //     concurrentRequestOffsetGenerator,
  //     1,
  //   );
  // });

  describe('getUniqueString', () => {
    it('', () => {
      expect(1).toEqual(1);
    });
  });
});
