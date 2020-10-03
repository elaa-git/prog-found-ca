// question 1

var carBrand = "bmw";

// question 2

var person = {
    name: "Bill",
    age: 32
};

// question 3

var outOfStock = true;

// question 4

var numbersArray = [1, 2, 3, 4, 5];

for(var i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
}

// question 5

for(var count = 15; count <= 25; count++) {
    console.log(count);
}

// question 6

for(var count = 15; count <= 25; count++) {
    if (count === 20) 
    console.log(count);
}

// question 7

var cars = [
    {
      "brand": "bmw",
      "hk": 170,
      "electric": true
    },
    {
      "brand": "VW",
      "hk": 110,
      "electric": false
    }
]
  
for(var i=0; i < cars.length; i++){
    console.log(cars[i].hk);
    console.log(cars[i].electric);
}
    

// question 8

for(var count = 0; count <= 9; count++) {
    console.log(count);
}

// question 9

function twoArg(arg1, arg2) {
    var sum = arg1 - arg2;
    console.log(sum);
}

twoArg(10, 2);

// question 10

var myArray = [];

function myFunction(one) {
    var myArray = one;
    console.log(myArray);
}

myFunction(10);