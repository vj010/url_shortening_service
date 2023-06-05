export function converToBase62String(num: number): string {
  const alphabet =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const remainders: string[] = [];
  let quo = num;
  while (quo >= 62) {
    const remainder = quo % 62;
    remainders.unshift(alphabet.charAt(remainder));
    quo = Math.floor(quo / 62);
  }
  remainders.unshift(alphabet.charAt(quo));
  return remainders.join('');
}
