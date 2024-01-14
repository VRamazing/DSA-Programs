/*
Problem Description
You will be given an integer n. You need to return the count of prime numbers less than or equal to n.


Problem Constraints
0 <= n <= 10^3


Input Format
Single input parameter n in function.


Output Format
Return the count of prime numbers less than or equal to n.


Example Input
Input 1:
19
Input 2:
1


Example Output
Output 1:
8
Output 2:
0
*/


module.exports = { 
 //param A : integer
 //return an integer
	solve : function(A){
        if(A===0 || A===1){
            return 1;
        }
        let i=2;
        let countofPrimes = 0;
        while(i<=A){
            if(this.checkPrime(i)) {
                countofPrimes += 1
            }
            i++;
        }
        return countofPrimes;
	},
    checkPrime: function(B){
        let i=2;
        while(i<B){
           if(B%i===0){
               return false;
           }
           i++;
        }
        return true;
    }
};
