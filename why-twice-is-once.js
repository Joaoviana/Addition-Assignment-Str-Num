debugger;

let input = 0;

input+=1;
//(Number, 1)
String(1);
//(String, '1')
input += '1';
// input: (String, '11')
'11'%6;
// (Number, 5)

input+=1;
// input: (String, "111")
String(1);
//(String, '111')
input += '111';
// input: (String, '111111')
'111111'%6;
// (Number, 3)

