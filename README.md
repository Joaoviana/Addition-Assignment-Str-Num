## Addition-Assignment-Str-Num

this expression works with the binary assignment operator += with variable input, type casting and the assignment operator modulo of 6. 


### Index
* [Learning Objective](#learning-objective)
* [Study Snippet](#study-snippet)
* [Practice Points](#practice-points)
* [Helpful Links](#helpful-links)
___

## Learning Objective

Language Features:
* String();
* += assignment operator with strings and numbers;
* % arithmetic operator;

[TOP](#index)

___
 
## Study Snippet

```js
// += (str), += (num), %
let input = 0;
(input += String(input += 1)) % 6;

input+=1;
//(Number, 1)
String(1)
//(String, '1')
input += '1'
//(String, '11')
'11'%6
//(Number, 5)
```

[Repl.it](https://repl.it/@Joaoviana/Binary-Operators)

[PyTut](https://goo.gl/kZpftP)

[TOP](#index)

___

## Practice Points:

input += "1"; // when input is a number  
%  
strange: same output, even with top line uncommented  

[TOP](#index)

## Helpful Links

* +=: [w3schools](https://www.w3schools.com/js/js_assignment.asp)
* %: [w3schools](https://www.w3schools.com/js/js_arithmetic.asp)

[TOP](#index)
