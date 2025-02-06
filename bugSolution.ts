function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Array destructuring
let [firstName] = user; 
console.log(greeter(firstName)); //Outputs: Hello, Jane

// Solution 2: Accessing the first element
console.log(greeter(user[0])); //Outputs: Hello, Jane

// Solution 3: Iterating through the array
user.forEach(name => console.log(greeter(name))); //Outputs: Hello, Jane, Hello, Doe