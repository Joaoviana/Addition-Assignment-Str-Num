debugger;

num_1 = 1;
let num_num;
{ // num_1 += 1;
  num_1 = num_1 + 1;
  num_num = num_1;
};
let actual_str_num = 1;
actual += 1;
console.assert(num_num === actual, "fail: num_num");
