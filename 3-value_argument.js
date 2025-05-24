const arg = process.argv[2];
if (arg === undefined) {
  console.log("No argument");
}
else {
    console.log(arg);
    if (arg === "undefined") {
        console.log("undefined");
    }
    else {
        console.log("Argument found");
    }
    }