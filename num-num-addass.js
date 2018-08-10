debugger;

let num_1 = 1;
let num_num;
{ // num_1 += 1;
  num_1 = num_1 + 1;
  num_num = num_1;
};
let actual_num_num = 1;
actual_num_num += 1;
console.assert(num_num === actual_num_num, "fail: num_num");
