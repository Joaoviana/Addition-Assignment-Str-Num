// experimental conditions
//     str += num 
//     num += str 
//     num += num
//     str += str

// pass all tests without using "+=" in your blocks

let str_1 = "1";
let str_str;
{ // str_1 += "1";

  

};
let actual = "1";
actual += "1";
console.assert(str_str === actual, "fail: str_str");

str_1 = "1";
let str_num;
{ // str_1 += 1;

};
actual = "1";
actual += 1;
console.assert(str_num === actual, "fail: str_num");

let num_1 = 1;
let num_str;
{ // str_1 += "1";

};
actual = 1;
actual += "1;"
console.assert(num_str === actual, "fail: num_str");

num_1 = 1;
let num_num;
{ // str_1 += 1;

};
actual = 1;
actual += 1;
console.assert(num_num === actual, "fail: num_num");
