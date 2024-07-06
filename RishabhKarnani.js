// Name: Rishabh Karnani
// Student ID: 000488998


/* Question-1: Find the missing number in a unsorted
array whose value is upto n. For example if n is 5,
the array will be
Let array = [5, 4,1,2 ] , here the number missing is
3, so you have to find that number. Note: there can
be no negative number in the array, and the array
always starts with 1.
Another example - If n is 10 ,
Let array = [9, 5, 3, 2,6, 1, 7, 8, 10], here the
missing number is 4.
Write a function findMissingNumber(array, n) {
// Returns missing number
}
TEST CASES
array = [5, 4, 1, 2]
n = 5
# Expected output: 3
array = [9, 5, 3, 2, 6, 1, 7, 8, 10]
n = 10
# Expected output: 4
array = [2, 3, 1, 5]
n = 5
# Expected output: 4
array = [1, 2, 3, 4, 5]
n = 6
# Expected output: 6 */

function getMissingNum(arr, n) {
    // Calculate expected sum
    let expectedSum = (n * (n + 1)) / 2;
    
    // Calculate actual sum
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    // Return missing num
    return expectedSum - actualSum;
  }
  
  // Samples
  console.log(getMissingNum([5, 4, 1, 2], 5));                                  
  console.log(getMissingNum([9, 5, 3, 2, 6, 1, 7, 8, 10], 10));                 
  console.log(getMissingNum([2, 3, 1, 5], 5)); 
  console.log(getMissingNum([1, 2, 3, 4, 5], 6)); 
  


  /*Question-2: Given an array of integers nums and an
integer target, return the indices of the two
numbers such that they add up to the target.
You may assume that each input would have exactly
one solution, and you may not use the same
element twice.
For example - Let array = [1, 5, 2, 7] , target = 8 , so
you have to return [0, 3]
Another example - Let array = [20, 1, 5, 2, 11 ],
target = 3, so you have to return [1, 3]
TEST CASES
array = [1, 5, 2, 7]
target = 8
# Expected output: [0, 3]
array = [20, 1, 5, 2, 11]
target = 3
# Expected output: [1, 3]
array = [3, 2, 4]
target = 6
# Expected output: [1, 2] */

function findTwoSum(nums, target) {
    // Outer loop
    for (let i = 0; i < nums.length; i++) {
        // Inner loop
        for (let j = i + 1; j < nums.length; j++) {
            // Check sum
            if (nums[i] + nums[j] === target) {
                // Return indices
                return [i, j];
            }
        }
    }
    // No solution
    return [];
}

// Samples
console.log(findTwoSum([1, 5, 2, 7], 8)); 
console.log(findTwoSum([20, 1, 5, 2, 11], 3)); 
console.log(findTwoSum([3, 2, 4], 6)); 



/* Question3: Generate All Permutations of a
String
Given a string str, write a recursive function to
generate all permutations of the string.
// Input: "ABC"
// Output: ["ABC", "ACB", "BAC", "BCA", "CAB",
"CBA"]
Other example
// Input: "AB"
// Output: ["AB", "BA"]
Write a function generatePermutation(str) {
// Return array of combinations
}
TEST CASES:
let input = "AB";
// Expected Output: ["AB", "BA"]
let input = "A";
// Expected Output: ["A"]
Let input = “ABC”;
// Expected Output: ["ABC", "ACB", "BAC", "BCA",
"CAB", "CBA"]
“ */

function p(str) {
    if (str.length <= 1) {                                                                                      // Base case
        return [str];
    }

    let permutations = [];                                                                                      // Result array

    function permute(prefix, remaining) {
        if (remaining.length === 0) {                                                                           // Add permutation
            permutations.push(prefix); 
        } else {
            for (let i = 0; i < remaining.length; i++) {                                                        // Iterate chars
                permute(prefix + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));                 // Recurse
            }
        }
    }

    permute("", str);                                                                                           // Start recursion
    return permutations;                                                                                        // Return results
}

// Samples
let input1 = "AB";
console.log(p(input1)); 

let input2 = "A";
console.log(p(input2)); 

let input3 = "ABC";
console.log(p(input3)); 



/*Question4: Given a linked list, determine if it has
a cycle in it. If it has a cycle return true otherwise
return false. In this solution you have to write a
function like
Function checkIfCycleExists(headNode) {
// Return true or false.
}
Note: You can create a linked list by yourself just like
we did in class, and then pass the head node for
testing your solution.
TEST CASES:
headNode = "A";
Linked List = “A” -> “B” -> “C” -> “A”
// Expected Output: true
headNode = "1";
Linked List = “1” -> “2” -> “3” -> null
// Expected Output: false
headNode = "1";
Linked List = “1” -> “2” -> “3” -> 1
// Expected Output: true */

class Node {
    constructor(val) {
        this.val = val;                                     // Value
        this.next = null;                                   // Next node
    }
}

function hasCycle(head) {
    let slow = head;                                        // Slow pointer
    let fast = head;                                        // Fast pointer

    while (fast !== null && fast.next !== null) {
        slow = slow.next;                                   // Move slow
        fast = fast.next.next;                              // Move fast

        if (slow === fast) {
            return true;                                    // Cycle found
        }
    }

    return false;                                           // No cycle
}

// Sample case 1
let head1 = new Node("A");
head1.next = new Node("B");
head1.next.next = new Node("C");
head1.next.next.next = head1;                               // Create cycle
console.log(hasCycle(head1));                              

// Sample case 2
let head2 = new Node("1");
head2.next = new Node("2");
head2.next.next = new Node("3");
console.log(hasCycle(head2)); 

// Sample case 3
let head3 = new Node("1");
head3.next = new Node("2");
head3.next.next = new Node("3");
head3.next.next.next = head3;                               // Create cycle
console.log(hasCycle(head3)); 



/* Question5: Given a string containing just the
characters '(', ')', '{', '}', '[' and
']', determine if the input string is valid.
An input string is valid if:
● Open brackets must be closed by the same
type of brackets.
● Open brackets must be closed in the correct
order.
● An empty string is also considered valid.
Write a function like checkIfValidParenthesis(str)
{
 // return true or false
}
TEST CASES:
str = "()";
// Expected Output: true
str = "(){}[ ]";
// Expected Output: true
Str = “([})”
// Expected Output: false
Str = “[({})]”
// Expected Output: true */

function isValid(str) {
    let stack = [];                                                         // Initialize stack
    for (let char of str) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);                                               // Push opening
        } else {
            let top = stack.pop();                                          // Pop stack
            if ((char === ')' && top !== '(') || 
                (char === '}' && top !== '{') || 
                (char === ']' && top !== '[')) {
                return false;                                               // Mismatch found
            }
        }
    }
    return stack.length === 0;                                              // Check empty
}

// Samples
console.log(isValid("()"));        
console.log(isValid("(){}[]"));    
console.log(isValid("([})"));      
console.log(isValid("[({})]"));    





