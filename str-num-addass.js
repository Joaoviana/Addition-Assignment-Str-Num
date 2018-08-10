debugger ;

str_1 = "1";
let str_num;
{ // str_1 += 1;
  str_1 = str_1 + 1;
  str_num = str_1

};
let actual_str_num = "1";
actual_str_num += 1;
console.assert(str_num === actual_str_num, "fail: str_num");
