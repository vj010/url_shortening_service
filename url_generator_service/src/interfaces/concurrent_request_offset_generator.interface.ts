export interface ConcurrentRequestOffsetGenerator {
  getRequestoffset(): Promise<number>;
}
