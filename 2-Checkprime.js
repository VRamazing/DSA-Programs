/* 
Problem Description
Given a number A. Return 1 if A is prime and return 0 if not. 

Note : 
The value of A can cross the range of Integer.


Problem Constraints
1 <= A <= 109


Input Format
The first argument is a single integer A.


Output Format
Return 1 if A is prime else return 0.


Example Input
Input 1:
A = 5
Input 2:

A = 10


Example Output
Output 1:
1
Output 2:

0


Example Explanation
Explanation 1:
5 is a prime number.
Explanation 2:

10 is not a prime number.
*/


module.exports = { 
 //param A : long
 //return an integer
	solve : function(A){    
        let count = 0;    
        for(let i = 1; (BigInt(i)*BigInt(i))<=A; i++){
            if(A%(BigInt(i)) === BigInt(0)){
                count+=2;
            }
            if(BigInt(i)*BigInt(i) === A){
                count -= 1;
            }
        }
        if(count === 2){ return 1;}
        return 0;
	}
};
