/* In JavaScript, `const fs = require("fs");` is used to include the built-in Node.js File System
module (`fs`) in your script. This module provides functions for interacting with the file system on
your computer. By requiring the `fs` module, you can perform operations like reading from and
writing to files, creating directories, and more within your Node.js application. */


// Access form
let formShow=false;
const f=document.getElementsByClassName("AddTask")

// button Access
const newTask = document.getElementById("NewTask")
const sub = document.getElementById("sub")
const inData = document.querySelectorAll(".container > input")
const checkBox = document.querySelectorAll("#ckeckBox")

// Add event handlers
newTask.addEventListener("click", () => {
    if(formShow) {
        f[0].setAttribute("class", "AddTask hide")
        formShow=false
    }
    else{
        f[0].setAttribute("class", "AddTask");
        formShow=true;
    }
    
    
});

// sub.addEventListener("click", () => {
//     for (let i = 0; i < 3; i++) {
//         j = inData[i].value
//         console.log(j);
//     }
//     for (let i = 0; i < 3; i++)
//      {
//         j = checkBox[i].checked
//         console.log(j);
//     }
// });

