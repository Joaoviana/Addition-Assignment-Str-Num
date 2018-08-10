debugger;

let num_1 = 1;
let num_str;

{ // num_1 += "1";
  num_1 = num_1 + "1";
  num_str = num_1;
};

let actual_str_num = 1;
actual_str_num += "1";
console.assert(num_str === actual_str_num, "fail: num_str");
