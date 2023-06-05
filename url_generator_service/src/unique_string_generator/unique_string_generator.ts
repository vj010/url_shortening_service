import { ConcurrentRequestOffsetGenerator } from 'src/interfaces/concurrent_request_offset_generator.interface';
import { converToBase62String } from 'src/utils/helpers';
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
    const currentTimeStamp = new Date().getTime();
    const uniqueStringNum = (currentTimeStamp * 10 + offset) * 10 + this.nodeId;

    return this.converToBase62String(uniqueStringNum);
  }

  private converToBase62String(num: number): string {
    return converToBase62String(num);
  }
}
