//pasikartot loops
// arrow functions
//algoritmu sprendimas pair-programming

//LOOPS
    //paruost prezentacija
        // for
        // forEach
        // while
        // map

//arrow funcions and anonymous functions (pereinant is map)
    //paruost prezentacija


// Uzduotys
    //paverst funkcijas i arrow functions: 3 - 4 funkcijos
    //algoritmai
        // funkcija paskaiciuoti kvadrato plota.

        // funkcija apskritimo plotui

        // funkcija staciojo trikampio izambinei

        // String apvertimas - https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
        // Faktorialai - https://coderbyte.com/editor/guest:First%20Factorial:JavaScript
        // 

        // Implement a method that accepts 3 integer values a, b, c. 
        // The method should return true if a triangle can be built with the sides of 
        // given length and false in any other case.
        // (In this case, all triangles must have surface greater than 0 to be accepted).

        function isTriangle(a,b,c) {
            if (a+b>c && a+c>b && b+c>a) {
                return true;
            } else {
                return false;
                }
            }



        // Usually when you buy something, you're asked whether your credit card number, 
        // phone number or answer to your most secret question is still correct. 
        // However, since someone could look over your shoulder, 
        // you don't want that shown on your screen. Instead, we mask it.

        function maskify(cc) {
            let result = cc.split('');
          
            for(let i = result.length; i >=0; i--) {
              if(i < (result.length - 4)){
              result[i]='#';
              }
            }
            return result.join('');
          }

          //or

        function maskify(cc) {
            return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
        }
          
//      Welcome. In this kata, you are asked to square every digit of a number.
//      For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//      Note: The function accepts an integer and returns an integer

        function squareDigits(num){
            let nums = num.toString().split('');
            let res = '';
            for(let i = 0; i < nums.length; i++){
            res += (nums[i] * nums[i])+'';
            }
            return parseInt(res);
        }

        //or

        function squareDigits(num){
            return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
            
          }


 //       In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//          Example:

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers){
    let arr = numbers.split(' ');
    
    let parsed = arr.map(number => {
      return parseInt(number)
      });
  
    return `${Math.max(...parsed)} ${Math.min(...parsed)}`;
  }


