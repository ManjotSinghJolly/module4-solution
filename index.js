let array = ["Jonathan", "Nancy", "Steve", "Joyce", "Hopper"];

array.map((el) => {
  if (el.charAt(0) === "J" || el.charAt(0) === "j") {
    console.log(`Goodbye ${el}`);
  } else {
    console.log(`Hello ${el}`);
  }
});
