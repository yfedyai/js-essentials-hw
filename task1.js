// conver uah to usd

function convert(uah) {

return uah*8;
}

console.log(convert(2));


// revese string
function reverse(str) {

    return str.split("").reverse().join("");  //sptit makign array from string , join()- reversing array, join()-transfrom back from array to str;
}

console.log(reverse('abc'));

// buid ## tree

function printStairs(n) {
    let result='';
    let stair = '#';

    for(let i=0; i<n; i++) {
        for(let j=0; j<=i; j++) {
            result += stair;
        }

        result+= '\n';

    }
return result;
}

console.log(printStairs(5))

// count of sum range beetwenn two nubers
function sumRange(start, end) {
    let result=0;
    for(let i = start; i <= end; i++) {

        result += i;

    }
    return result;
}

console.log(sumRange(2,4))


// find min element 

function min (a, b, c, d) {
    let arr = [];
    arr = Array.from(arguments).sort(function(x,y){ ///fucntion (x,y) if x-y returns value <0 , then x lower then y;
        return x-y;
    }
    )
    return arr[0];
}

console.log(min(100, 4, 200, 15))


// make first and last element uppercase
function firstAndLastToUpper(str) {

    return str.charAt(0).toUpperCase() + str.slice(1, str.length-1)+ str.charAt(str.length-1).toUpperCase() ;
}

console.log(firstAndLastToUpper('abcd'))

// checking for substring
function cursorCheck(str) {
    if (str.indexOf('ironman') !== -1 || str.indexOf('ostap') !== -1 || str.indexOf('cursor') !== -1) {
        return true;
    }
    else {
        return false;
    }
}

console.log(cursorCheck('hi, i asdsd asds ost'))
console.log(cursorCheck('hi, i am cursor '))


// 