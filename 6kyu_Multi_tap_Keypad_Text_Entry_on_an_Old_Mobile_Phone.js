/*

Multi-tap Keypad Text Entry on an Old Mobile Phone

Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|     | |space| |     |
|  *  | |  0  | |  #  |
------- ------- -------
Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)

def presses(phrase):
    taps = {
            1 : '1ADGJMPTW *#',
            2 : 'BEHKNQUX0',
            3 : 'CFILORVY',
            4 : '23456S8Z',
            5 : '79'
            }
#    output = 0
#    for letter in (phrase):
#        for key, value in taps.items():
#            if letter.upper() in value:
#                output += key
#    return output
    
    return sum(key for key, values in taps.items() for letter in phrase if letter.upper() in values)
BUTTONS = [
          '1',
          'abc2',
          'def3',
          'ghi4',
          'jkl5',
          'mno6',
          'pqrs7',
          'tuv8',
          'wxyz9',
          '*',
          ' 0',
          '#'
          ]
def presses(phrase):
    return sum(1 + button.find(c) for c in phrase.lower() for button in BUTTONS)

    */

describe('Tests', () => {
    test('LOL = 9', () => {
        expect(presses('LOL')).toBe(9);
    });
    test('HOW R U = 13', () => {
        expect(presses('HOW R U')).toBe(13);
    });
});
function presses(phrase) {

    let phraseUp = phrase.toUpperCase();
    let pressCounter = 0;

    for (let c of phraseUp) {
        if ('1ADGJMPTW *#'.indexOf(c) >= 0) pressCounter += 1;
        if ('BEHKNQUX0'.indexOf(c) >= 0) pressCounter += 2;
        if ('CFILORVY'.indexOf(c) >= 0) pressCounter += 3;
        if ('23456S8Z'.indexOf(c) >= 0) pressCounter += 4;
        if ('79'.indexOf(c) >= 0) pressCounter += 5;
    };

    return pressCounter;
}


describe('Tests V2', () => {
    test('LOL = 9', () => {
        expect(presses_v2('LOL')).toBe(9);
    });
    test('HOW R U = 13', () => {
        expect(presses_v2('HOW R U')).toBe(13);
    });
});

function presses_v2(s) {
    var s1 = "1*# ADGJMPTW0BEHKNQUXCFILORVY23456S8Z79",
        s2 = "111111111111222222222333333334444444455";
    return [...s.toUpperCase()].reduce((a, b) => a + +s2[s1.indexOf(b)], 0);
}