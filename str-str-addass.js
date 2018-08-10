debugger;

let str_1 = "1";
let str_str;
{ // str_1 += "1";
  str_1 = str_1 + '1';
  str_str = str_1;
};

let actual_str_str = "1";
actual_str_str += "1";
console.assert(str_str === actual_str_str, "fail: str_str");
