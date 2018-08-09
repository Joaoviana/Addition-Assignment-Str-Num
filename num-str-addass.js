let num_1 = 1;
let num_str;

{ // num_1 += "1";
  num_1 = num_1 + "1";
  num_str = num_1;
};

actual = 1;
actual += "1";
console.assert(num_str === actual, "fail: num_str");
