<!-- Union and Intersection Type Blog -->

Union and intersection types are important features in TypeScript.They are use to ensure the type safety in our code.

UNION TYPE ---->

It's Allow a variable to be one of several possible types. It’s created using the '|' symbol.For example, a variable that can hold either a string or a number would have the type string | number.The key advantage of union types is that they let you specify multiple possible types for a value, making your code more flexible.
Here is a example:

function exampleUnion(input: string | number) {
console.log(input.toString());
}

exampleUnion is a function . It's take 1 parameter and the parameter can be a string or a number.



INTERSECTION TYPE ---->

An intersection type combines multiple types into one.It created with '&' symbol. It represents a type that has all the properties of its constituent types.Intersection types are useful when you need to model a scenario where a value must conform to multiple types simultaneously.
Here are some example:

type Person = { name: string; age: number };
type Employee = { jobTitle: string };
type EmployeeDetails = Person & Employee; <!--Intersection Type--->
