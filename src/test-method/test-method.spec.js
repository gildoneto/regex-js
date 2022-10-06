/* eslint-disable no-undef */

describe('Test method', () => {
  describe('match literal', () => {
    it('/Hello/ should should match the string "Hello, World!"', () => {
      const someString = 'Hello, World!';
      const testRegex = /Hello/;
      const result = testRegex.test(someString);
      expect(result).toBe(true);
    });
    it('/kevin/ should NOT match the string "My name is Kevin"', () => {
      const someString = 'My name is Kevin';
      const testRegex = /kevin/;
      const result = testRegex.test(someString);
      expect(result).toBe(false);
    });
  });
  describe('OR operator => |', () => {
    const petRegex = /dog|cat|bird|fish/;
    it('/dog|cat|bird|fish/ should match the string "John has a pet dog."', () => {
      expect(petRegex.test('John has a pet dog.')).toBe(true);
    });
    it('/dog|cat|bird|fish/ should NOT match the string "Emma has a pet rock."', () => {
      expect(petRegex.test('Emma has a pet rock.')).toBe(false);
    });
    it('/dog|cat|bird|fish/ should match the string "Emma has a pet bird."', () => {
      expect(petRegex.test('Emma has a pet bird.')).toBe(true);
    });
    it('/dog|cat|bird|fish/ should match the string "Liz has a pet cat."', () => {
      expect(petRegex.test('Liz has a pet cat.')).toBe(true);
    });
    it('/dog|cat|bird|fish/ should NOT match  the string "Kara has a pet dolphin."', () => {
      expect(petRegex.test('Kara has a pet dolphin.')).toBe(false);
    });
    it('/dog|cat|bird|fish/ should match the string "Alice has a pet fish."', () => {
      expect(petRegex.test('Alice has a pet fish.')).toBe(true);
    });
    it('/dog|cat|bird|fish/ should NOT match the string "Jimmy has a pet"', () => {
      expect(petRegex.test('Jimmy has a pet')).toBe(false);
    });
  });

  describe('ignore case', () => {
    const ignoreCaseRegex = /javascript/i;

    it('"/javascript/i" should match the string "RegexJavaScriptTips"', () => {
      expect(ignoreCaseRegex.test('RegexJavaScriptTips')).toBe(true);
    });
  });
});
