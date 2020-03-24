# LabFour

 -- 23/03/2020 --

 array.forEach()

 Looks through the arrays

 for loop
  breakdown:
  for (initialize; condition; increment) ;
  for (initialize; condition; increment) single statement;
  for (initialize; condition; incremnent) {multipul statements}

  infinite loops -> DO NOT

  for (;;)
       ^^
       Both semi colons are nessesary for the function to work / else throws syntax error
       The brackets are required to contain and define

for (var i = 0; i < 10; i++) let x = i;
                             ^^^^^^^^^
                            Fails because it's not contains within {} / syntax error


// Two dimensional
for (let y = 0; y < 2; y++)
    for (let x = 0; x < 2; x++)
        console.log(x, y);

// Three dimensional                      //      <<----- Create truth tables
for (let z = 0; z < 2; z++) {
    for (let y = 0; y < 2; y++)
        for (let x = 0; x < 2; x++)
        console.log(x, y, z);
}


for (let i = 0; i < 3; i++) {if (i == 1) continue; console.log(i);}
                                            ^^
                                            Skips the following steps if condition is true


break "label_name" skips over the labeled function

for (let value of "some value")
         ^^^^^
    This is set to a single value contained in "some value" and executes whatever command is contained in the for loop FOR EACH VALUE


object.keys()

// converts an object to an array by mapping the object property names to an array as string values
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]


       legal statement