debugger;

let num_1 = 1;
let num_str;

{ // num_1 += "1";
  num_1 = num_1 + "1";
  num_str = num_1;
};

let actual_num_str = 1;
actual_num_str += "1";
console.assert(num_str === actual_num_str, "fail: num_str");
