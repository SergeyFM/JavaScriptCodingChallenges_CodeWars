/*

Pyramid Slide Down

Pyramids are amazing! Both in architectural and mathematical sense. 
If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. 
For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, 
like this one here:

   /3/
  \7\ 4 
 2 \4\ 6 
8 5 \9\ 3

Here comes the task...
Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. 
As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

Your task is to write a function that takes a pyramid representation as an argument and 
returns its largest 'slide down'. 
For example:

* With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
* Your function should return `23`.

By the way...
My tests include some extraordinarily high pyramids so as you can guess, 
brute-force method is a bad idea unless you have a few centuries to waste. 
You must come up with something more clever than that.


*/

describe('Tests', () => {
    test("should work for small pyramids", () => {
        expect(longestSlideDown(
            [
                [53],
                [17, 67],
                [98, 8, 23],
                [85, 19, 85, 86],
                [52, 2, 87, 78, 15],
                [12, 23, 58, 79, 67, 0],
                [9, 81, 76, 71, 7, 42, 39],
                [58, 92, 22, 95, 29, 80, 70, 97],
                [36, 26, 0, 75, 33, 16, 72, 44, 85],
                [54, 50, 35, 43, 47, 25, 19, 52, 84, 20],
                [11, 70, 54, 7, 65, 59, 2, 72, 51, 9, 83],
                [5, 7, 15, 41, 55, 47, 11, 12, 93, 52, 85, 36],
                [97, 18, 40, 91, 65, 2, 84, 76, 82, 76, 46, 3, 96],
                [61, 48, 75, 17, 32, 52, 35, 52, 75, 99, 48, 54, 81, 4],
                [8, 52, 26, 5, 31, 21, 50, 28, 90, 37, 5, 92, 48, 66, 39],
                [6, 91, 99, 96, 39, 37, 40, 10, 64, 24, 64, 55, 85, 48, 36, 64],
                [57, 53, 17, 78, 82, 89, 68, 68, 41, 71, 40, 58, 70, 35, 7, 69, 27],
                [46, 3, 85, 42, 54, 64, 13, 25, 34, 69, 21, 27, 65, 39, 68, 1, 56, 95],
                [36, 91, 87, 43, 28, 60, 11, 21, 79, 47, 20, 96, 37, 93, 70, 62, 84, 79, 82],
                [68, 91, 69, 77, 82, 95, 74, 66, 24, 44, 0, 72, 69, 5, 36, 26, 25, 93, 0, 68]

            ])
        ).toBe(1356);
    });

    test("should work for medium pyramids", () => {
        expect(longestSlideDown(
            [
                [75],
                [95, 64],
                [17, 47, 82],
                [18, 35, 87, 10],
                [20, 4, 82, 47, 65],
                [19, 1, 23, 75, 3, 34],
                [88, 2, 77, 73, 7, 63, 67],
                [99, 65, 4, 28, 6, 16, 70, 92],
                [41, 41, 26, 56, 83, 40, 80, 70, 33],
                [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
                [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
                [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
                [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
                [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
                [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
            ])
        ).toBe(1074);
    });
});


function longestSlideDown(pyramid) {

    // I go from the top to the down adding the max nearest value from a row above to the current value

    //      PYRAMID                        SUMMED                 MAX
    //         3                              3                    3
    //     7+3    4+3                      10   7                  10
    // 2+10   4+10    6+7              12    14    13              14

    // at the end return max value from the row - 14

    // go row by row starting from the second one
    for (let rowIndex = 1; rowIndex < pyramid.length; rowIndex++) {

        let prevRow = pyramid[rowIndex - 1];
        let thisRow = pyramid[rowIndex];

        console.log(pyramid[rowIndex]); 

        for (let itemIndex in thisRow) {

            // select greater value from the row above, use "undefined || 0" to make Math.max() work
            var prevRowMaxItem = Math.max(prevRow[itemIndex - 1] || 0, prevRow[itemIndex] || 0);

            // add the max item to the item on the current row
            thisRow[itemIndex] += prevRowMaxItem;
        }

    }

    // here is the last row of the pyramid
    let lastRow = pyramid[pyramid.length - 1];

    // find max value
    let max = Math.max(...lastRow);

    return max;

}