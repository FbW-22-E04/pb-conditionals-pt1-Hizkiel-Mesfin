//#1

const int1 = 30;
const int2 = 49;

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
  console.log(true);
} else {
  console.log(false);
}

//#2

const int3 = 94;

if (
  (int1 >= 50 && int1 <= 99) ||
  (int2 >= 50 && int2 <= 99) ||
  (int3 >= 50 && int3 <= 99)
) {
  console.log("true");
} else {
  console.log("false");
}

//#3

const a = 46;
const b = 344;
const c = 79;

if (a > b && a > c) {
  console.log("a");
} else if (b > a && b > c) {
  console.log("b");
} else {
  console.log("c");
}

//************************ */

if (int1 > int2 && int1 > int3) {
  console.log("int1");
} else if (int2 > int1 && int2 > int3) {
  console.log("int2");
} else {
  console.log("int3");
}

//#4
let str = "thon";

if (str[0] === "P" && str[1] === "y") {
  console.log(str);
} else {
  console.log((str = "Py" + str));
}

//#5

if (int1 + int2 > 50 && int1 + int2 < 80) {
  console.log(65);
} else {
  console.log(80);
}

//#6

const int4 = 30;
const int5 = 1;

if (int4 + int5 === 8 || int4 - int5 === 8) {
  console.log("true");
} else {
  console.log("false");
}

//#7
if (int4 === 15 || int5 === 15 || int4 + int5 === 15) {
  console.log("true");
} else {
  console.log("false");
}

//#8
if (int4 % 7 === 0 || int4 % 11 === 0 || int5 % 7 === 0 || int5 % 11 === 0) {
  console.log("true");
} else {
  console.log("false");
}

//#9

if (int4 === int5) {
  console.log((int4 + int5) * 3);
} else {
  console.log(int4 + int5);
}

//#10

if (int5 > 19) {
  console.log((int5 - 19) * 2);
} else {
  console.log(19 - int5);
}

//#11

const firstName = "Ezekiel";
const age = 78;

if (age < 13) {
  console.log(` ${firstName} is a child`);
} else if (age >= 13 && age < 20) {
  console.log(` ${firstName} is a teenager`);
} else if (age >= 20 && age < 30) {
  console.log(` ${firstName} is a young adult`);
} else {
  console.log(`${firstName} is an adult`);
}
