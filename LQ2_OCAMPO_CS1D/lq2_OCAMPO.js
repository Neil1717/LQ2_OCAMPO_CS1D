// the variables below will store the users input, and will show dialog box that will ask the user the following questions
let Name = prompt("Enter your name:");
let Address = prompt("Enter your address:");
let age = parseInt(prompt("Enter your age:"));
let Class_Role = prompt("Enter your class role (Officer, Student, Teacher):");
let Course = prompt("Enter your course (BSCS, BSM, BAEL):");

if (course === "BSCS" || course === "BSM" || course === "BAEL") { // this line of code will detect the course
    
    // this line of code contains nested conditons(switch, else) that will check for the class role of the user
    switch (Class_Role) {
        case "Officer":
        case "Student":
        case "Teacher":
            console.log(`User Info: Name - ${Name}, Address - ${Address}, Age - ${age}, Role - ${Class_Role}, Course - ${Course}`);
            break; // this line of code will stop if the condition above is satisfied
        default:
            console.log("Invalid class role, assigning default role: Student"); // this will display if the uses input is non-existent 
            Class_Role = "Student";
    }

} else {
    console.log("Invalid course entered. Exiting program."); // if all of the conditions on this nested conditions is not satisfied, it will this display this line
}

// Loop to print name 
let iterations = Math.floor(age / 4); //iterating (age / 4) times
for (let i = 0; i < iterations; i++) {
    console.log(`Iteration ${i + 1}: ${Name}`);
}
