export const mockCodeSnippets = [
  {
    name: "Simple Function",
    code: `function greet(name) {
  console.log("Hello, " + name + "!");
  return "Greeting sent";
}

const result = greet("Alice");
console.log(result);`
  },
  {
    name: "React Component",
    code: `import React from 'react';

const UserProfile = ({ name, email, avatar }) => {
  return (
    <div className="user-profile">
      <img src={avatar} alt={name} className="avatar" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default UserProfile;`
  },
  {
    name: "Array Methods",
    code: `const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);`
  }
];