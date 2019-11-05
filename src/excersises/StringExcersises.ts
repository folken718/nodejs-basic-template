
export function invertString(word: string): string {
    const input: string[] = word.split('');
    let inverted: string = '';
    for(let i = input.length -1; i >= 0; i--) {
        inverted = inverted.concat(input[i]);
    }
    return inverted;
}

export function isPalindrome(wordA: string, wordB: string): boolean {
    const inputA: string[] = wordA.split('');
    const inputB: string[] = wordB.split('');
    let resultFlag = true;
    if(inputA.length !== inputB.length) return false;
    for(let i = 0; i <= inputA.length; i ++) {
        if(inputA[i] !== inputB[inputB.length - i - 1]) {
            resultFlag = false;
            break;
        }
    }
    return resultFlag;
}