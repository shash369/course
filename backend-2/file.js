const fs = require('fs');
const path = "C:\\Users\\princ\\OneDrive\\Desktop\\React\\backend-2\\example.txt";
// Write to the file
fs.writeFile(path, "file was created with write file and path var is used", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("done");
    }
});
// Append to the file
fs.appendFile(path, "append in the same file", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("done");
    }
});

const newPath = "C:\\Users\\princ\\OneDrive\\Desktop\\React\\backend-2\\renamed-example.txt";

fs.rename(path, newPath, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File renamed successfully");
    }
});
