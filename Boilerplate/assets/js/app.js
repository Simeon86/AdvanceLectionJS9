var arr = ['Facebook', 'Google', 'Twitter'];
var arrLenght = arr.length;

for (var index = 0; index < arrLenght; index++) {
    console.log(arr[index], index)
}

// FOR IN

for (var index in arr) {
    console.log(index)
}

for (var index in arr) {
    console.log(arr[index])
}

// FOR OF

for (var element of arr) {
    console.log(element)
}

// Prototype

var loop = function(element, index, array) {
    console.log(element, index, array)
}
arr.forEach(loop)

// Shortcut

// REVERSE

arr.reverse() 

arr.forEach(function (element, index, array) {
    console.log(element, index, array)
});

var arrInt = [11,2,8,1,12,4,6,33];

// ADD

arrInt.push(123)

// Sort

arrInt.sort(function(a,b) {
    // return b - a;
    return a - b;
})

console.log(arrInt)

//Filter

arrInt.filter(function(element) {
    console.log(element);
    return false;
})

var result = arrInt.filter(function(element) {
    if (element > 5) {
        return true;
    }
    return false;
});
console.log(result)



////////////////////////////////////////////////////

//MAP

var mapArr = ['Ivan', 'Anton', 'Georgi', 'John']

console.log(mapArr)

//Element in Object 

// mapArr.map(function(element) {
//     return element
// })
// console.log(mapArr)



// mapArr = mapArr.map(function(element) {
//     return {}
// })
// console.log(mapArr)



mapArr = mapArr.map(function(element) {
    return {
        name: element
    };
});
console.log(mapArr)

///////////////////////////////////////

var x = 'string'

console.log(x);
console.log(x.length);
console.log(x.split());
console.log(x.split(''));
console.log(x.split('t'));

///////////////////////////////////////

var isPolindrome = function(strInput) {
    var strArr = strInput.split('');
    return strArr;
}
console.log(isPolindrome('Simeon'))



var isPolindrome1 = function(strInput) {
    var strArr = strInput.split('');
    strArr = strArr.reverse();
    return strArr;
}
console.log(isPolindrome1('Simeon'))




var isPolindrome2 = function(strInput) {
    var strArr = strInput.split('');
    strArr = strArr.reverse();
    var result = strArr.join('')
    
    return result;
}
console.log(isPolindrome2('Simeon'))


var isPolindrome3 = function(strInput) {
    var strArr = strInput.split('');
    strArr = strArr.reverse();
    var result = strArr.join('');
    
    return result === strInput;
}
console.log(isPolindrome3('Simeon'))
console.log(isPolindrome3('anna'))
console.log(isPolindrome3('121'))

// Shortcut

var isPolindrome4 = function(strInput) {
    return strInput === strInput.split('').reverse().join('');
}

console.log(isPolindrome4('121'))

/////////////////////////////////////////

//Join

var z = ['a', 'b', 'c']
console.log(z);
console.log(z.join());
console.log(z.join(''));


var joinArr = ['t', 'e', 's', 't'];
var strArrJoin = joinArr.join('');
console.log(strArrJoin);

/////////////////////////////////////

var y = 'Anna'
console.log(y);
console.log(y.toLocaleLowerCase());
console.log(y.toLocaleUpperCase());


