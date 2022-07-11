//#1

const int1 = 30;
const int2 = 49;

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
  console.log("Q1:", "true");
} else {
  console.log("Q1:", "false");
}

//#2

const int3 = 94;

if (
  (int1 >= 50 && int1 <= 99) ||
  (int2 >= 50 && int2 <= 99) ||
  (int3 >= 50 && int3 <= 99)
) {
  console.log("Q2:", "true");
} else {
  console.log("Q2:", "false");
}

//#3

const a = 46;
const b = 344;
const c = 79;

if (a > b && a > c) {
  console.log("Q3.1:", "a");
} else if (b > a && b > c) {
  console.log("Q3.1:", "b");
} else {
  console.log("Q3.1:", "c");
}

//************************ */

if (int1 > int2 && int1 > int3) {
  console.log("int1");
} else if (int2 > int1 && int2 > int3) {
  console.log("Q3.2:", "int2");
} else {
  console.log("Q3.2:", "int3");
}

//#4
let str = "thon";

if (str[0] === "P" && str[1] === "y") {
  console.log("Q4:", str);
} else {
  console.log("Q4:", (str = "Py" + str));
}

//#5

if (int1 + int2 > 50 && int1 + int2 < 80) {
  console.log("Q5:", 65);
} else {
  console.log("Q5:", 80);
}

//#6

const int4 = 30;
const int5 = 1;

if (int4 + int5 === 8 || int4 - int5 === 8) {
  console.log("Q6:", "true");
} else {
  console.log("Q6:", "false");
}

//#7
if (int4 === 15 || int5 === 15 || int4 + int5 === 15) {
  console.log("Q7:", "true");
} else {
  console.log("Q7:", "false");
}

//#8
if (int4 % 7 === 0 || int4 % 11 === 0 || int5 % 7 === 0 || int5 % 11 === 0) {
  console.log("Q8:", "true");
} else {
  console.log("Q8:", "false");
}

//#9

if (int4 === int5) {
  console.log("Q9", (int4 + int5) * 3);
} else {
  console.log("Q9", int4 + int5);
}

//#10

if (int5 > 19) {
  console.log("Q10", (int5 - 19) * 2);
} else {
  console.log("Q10", 19 - int5);
}

//#11

const firstName = "Ezekiel";
const age = 78;

if (age < 13) {
  console.log(`Q11: ${firstName} is a child`);
} else if (age >= 13 && age < 20) {
  console.log(`Q11: ${firstName} is a teenager`);
} else if (age >= 20 && age < 30) {
  console.log(`Q11: ${firstName} is a young adult`);
} else {
  console.log(`${firstName} is an adult`);
}
