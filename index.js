//!Understand the differnence between import and require:
//!import:

// import { CapitalizeString } from "./string_function";
import  {CapitalizeString} from "./string_function.js";
const cap = CapitalizeString("Successfully Imported!");
console.log(cap);


// The error you're encountering is because you're trying to use the import statement in a JavaScript file that's being treated as a CommonJS module. By default, Node.js treats JavaScript files as CommonJS modules, which use require instead of import. To use the import statement, you need to tell Node.js that your file is an ES module.
// Here’s how you can fix it:
// Option 1: Update package.json

//     In your project folder, locate the package.json file.

//     Add "type": "module" at the top level of the package.json file, like this:

//     json

//     {
//       "type": "module",
//       "name": "your-project-name",
//       "version": "1.0.0",
//       // other fields
//     }

//     This tells Node.js to treat all .js files in your project as ES modules, allowing you to use import and export.

// Option 2: Use the .mjs extension

//     Rename your JavaScript file from index.js to index.mjs.
//     Now, you can use the import statement in the .mjs file.

// Example:

// If you choose the first option and update package.json, your index.js can remain as:

// javascript

// import { CapitalizeString } from "./string_function";

// console.log(CapitalizeString("hello world"));

// If you choose the second option and rename your file to index.mjs, it should look like this:

// javascript

// import { CapitalizeString } from "./string_function.mjs";

// console.log(CapitalizeString("hello world"));

// Both methods will allow you to use the import statement without errors.