import { expect } from 'chai';
import * as stringExcersises from '../src/excersises/StringExcersises';

describe ('String Programming Excersises', () => {
    const word = 'montoya';
    const inverted = 'ayotnom';
    it(`Should return an inverted string from ${word}`, () => {
        const result = stringExcersises.invertString(word);
        expect(result).to.equal(inverted)
    });

    const palindrome = 'madam';
    it(`Should verify that ${palindrome} and ${palindrome} are a palindrome`, () => {
        const result = stringExcersises.isPalindrome(palindrome, palindrome);
        expect(result).to.be.true;
    });

    it(`Should verify that ${palindrome} and ${word} are not a palindrome because of their length`, () => {
        const result = stringExcersises.isPalindrome(palindrome, word);
        expect(result).to.be.false;
    });

    it(`Should verify that ${word} and ${word} are not a palindrome`, () => {
        const result = stringExcersises.isPalindrome(word, word);
        expect(result).to.be.false;
    });
    
});