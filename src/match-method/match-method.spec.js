/* eslint-disable no-undef */

describe('match() method', () => {
  describe('extract matches', () => {
    it('/coding/ should extract the string "coding" from sentence: "Extract the word coding from this string."', () => {
      const sentence = 'Extract the word coding from this string.';
      const testRegex = /coding/;
      const [extractedString] = sentence.match(testRegex);
      expect(extractedString).toBe('coding');
    });

    it('/twinkle/gi should extract the words "Twinkle" and "twinkle" from sentence: "Twinkle, twinkle, little star"', () => {
      const sentence = 'Twinkle, twinkle, little star';
      const testRegex = /twinkle/gi;
      const extractedString = sentence.match(testRegex);
      expect(extractedString).toStrictEqual(['Twinkle', 'twinkle']);
    });
  });

  describe('character class => []', () => {
    const bgRegex = /b[aiu]g/;
    const vowelRegex = /[aeiou]/gi;
    const quoteSample = 'Beware of bugs in the above code; I have only proved it correct, not tried it.';
    const vowels = [
      'e', 'a', 'e', 'o', 'u', 'i',
      'e', 'a', 'o', 'e', 'o', 'e',
      'I', 'a', 'e', 'o', 'o', 'e',
      'i', 'o', 'e', 'o', 'i', 'e',
      'i'];
    it(`${bgRegex} should extract "big" when match with string: "big"`, () => {
      const [result] = 'big'.match(bgRegex);
      expect(result).toBe('big');
    });
    it(`${bgRegex} should extract "bag" when match with string: "bag"`, () => {
      const [result] = 'bag'.match(bgRegex);
      expect(result).toBe('bag');
    });
    it(`${bgRegex} should extract "bug" when match with string: "bug"`, () => {
      const [result] = 'bug'.match(bgRegex);
      expect(result).toBe('bug');
    });
    it(`${bgRegex} should extract null when match with string: "bog"`, () => {
      const result = 'bog'.match(bgRegex);
      expect(result).toBe(null);
    });

    it(`${vowelRegex} should extract all vowels from sentence: "${quoteSample}"`, () => {
      const result = quoteSample.match(vowelRegex);
      expect(result).toStrictEqual(vowels);
    });
  });
});
