import { ConcurrentRequestOffsetGenerator } from 'src/interfaces/concurrent_request_offset_generator.interface';
import { converToBase62String } from '../utils/helpers';
export class UniqueStringGenerator {
  concurrentRequestOffsetGenerator: ConcurrentRequestOffsetGenerator;
  nodeId: number;
  constructor(
    concurrentRequestOffsetGenerator: ConcurrentRequestOffsetGenerator,
    nodeId: number,
  ) {
    this.concurrentRequestOffsetGenerator = concurrentRequestOffsetGenerator;
    this.nodeId = nodeId;
  }

  private async getCurrentOffset(): Promise<number> {
    return await this.concurrentRequestOffsetGenerator.getRequestoffset();
  }

  public async getUniqueString(): Promise<string> {
    const offset = await this.getCurrentOffset();
    const referenceTime = new Date('2023-06-01T00:00:00.000Z');
    const currentTimeStamp = Math.floor(
      (new Date().getTime() - referenceTime.getTime()) / 1000,
    );
    const uniqueStringNum =
      (currentTimeStamp * Math.pow(10, offset.toString().length) + offset) *
        Math.pow(10, this.nodeId.toString().length) +
      this.nodeId;

    return this.converToBase62String(uniqueStringNum);
  }

  private converToBase62String(num: number): string {
    return converToBase62String(num);
  }
}
