import { converToBase62String } from '../../src/utils/helpers';

describe('tests for helper function', () => {
  describe('tests for converToBase62String function', () => {
    it('0 conversion', () => {
      expect(converToBase62String(0)).toEqual('0');
    });

    it('62 conversion', () => {
      expect(converToBase62String(62)).toEqual('10');
    });

    it('2 conversion', () => {
      expect(converToBase62String(2)).toEqual('2');
    });

    it('10 conversion', () => {
      expect(converToBase62String(10)).toEqual('A');
    });

    it('61 conversion', () => {
      expect(converToBase62String(61)).toEqual('z');
    });

    it('23344 conversion', () => {
      expect(converToBase62String(23344)).toEqual('64W');
    });

    it('1685936310025121', () => {
      expect(converToBase62String(1685936310025121)).toEqual('7ijqxT8nR');
    });
  });
});
