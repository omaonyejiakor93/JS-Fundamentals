const num = Number(ProcessingInstruction.argv[2]);
if (isNaN(num)) {
  console.log("Not a number");
}
else {
    console.log(`My number: ${parseInt(num)}`);
}