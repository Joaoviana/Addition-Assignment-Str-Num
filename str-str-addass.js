//str_str

let str_1 = "1";
let str_str;
{ // str_1 += "1";
  str_1 = str_1 + "1";
  str_str = str_1; 
};
let actual = "1";
actual += "1";
console.assert(str_str === actual, "fail: str_str");
