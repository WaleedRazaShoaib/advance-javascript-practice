// let arr = [12, 54, 87, 18, 10,2];
// let smallNum = arr[0]; 
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallNum) {
//             smallNum = arr[i];
//         }
//     }
// console.log("Sab se chota number:", smallNum);

// let arr1 = [12, 54, 87, 18, 10];
// let sabSeBara1 = arr[0]; 

// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > sabSeBara1) {
//         sabSeBara1 = arr1[i];
//     }
// }
// console.log("Sab se bara number:", sabSeBara1);



// let array = [12,89,99,66,972,223,1]
// let assume = array[0];
// for(var i = 0; i < array.length; i++){
//     if(array[i] < assume ){
//         assume = array[i]
//     }
// }
// console.log(assume)


// var word = prompt("enter your word");
// var check = "";

// for (var i = word.length -1 ;i >= 0; i--){
//   check += word[i] 
// }
//    if(word === check){
//     console.log(word + " is a palindrome word")
// }
// else{
//     console.log( word +" is not a palindrome word")
// }



// let arrNum = [15, 39, 20, 32, 30, 45, 22]
// let arrNum2 = arrNum.reduce(function sumOfEle(num, ind) {
//   return num + ind;
// })
// console.log(arrNum2)

// let arrOne = [32, 45, 63, 36, 24, 11]
// const multFive = (num) => {
// return num * 5; //'num' here, is the value of the array.
// }
// let arrTwo = arrOne.map(multFive)
// console.log(arrTwo)

// let arrOne = [32, 45, 63, 36, 24, 11];
// let one =  arrOne.map((value,index)=>{
// if(arrOne[index] === 45){
//     console.log()
// }

// })
// console.log(one)

// let arrNum = [15, 39, 20, 32, 30, 45, 22]
// let newArray = arrNum.reduce((previousvalue,currentvalue) =>{
// return previousvalue + currentvalue
// })
// console.log(newArray)

// let wal = [2,9,8];
// let newWal = wal.sort((a,b)=>{
// if(a>b){
//     return 1
// } 
// else{
//     return -1
// }
// }) 

// console.log(newWal)



// let arr = [12, 54, 87, 18, 10];
// let meranum = arr[0];
// let arrayFilter = arr.filter(function(val,index){
// if(arr[index] < meranum ){
// meranum = arr[index]
// return true
// }
// else{
// return false
// }
// })
// console.log("Sab se chota number:",arrayFilter)

// let getValue = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         alert("data agaya")
//     },2000)
// })
// getValue
// .then(res => console.log("res--->",res))
// .catch(err =>console.log("err--->",err))


// var nameFull = "Waleed Shoaib";
//  console.log(nameFull[2])


// let myBigarray = [1,2,3,,5,6,7,8,9];
// let latestArr = myBigarray.filter((val)=>{
// return val % 2 === 0
// })
// console.log(latestArr)


// Get the current date and time
var today = new Date();

// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();

// Array of day names
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Display the current day
console.log("Today is: " + daylist[day] + ".");

// Get the current hour, minute, and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

// Determine if it's AM or PM
var prepand = (hour >= 12) ? " PM " : " AM ";

// Convert 24-hour format to 12-hour format
hour = (hour >= 12) ? hour - 12 : hour;

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}

// Display the current time
    console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second)
    document.write("Current Time: " + hour + prepand + " : " + minute + " : " + second)

