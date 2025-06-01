var num = +prompt("Enter a Number");

for (var i = 1; i <= num; i++) {
  document.write("<h2>" + "Table of " + i + "<br />" + "</h2>");

  console.log("table of" + i);
  for (var j = 1; j <= 10; j++) {
    document.write(i + " x " + j + " = " + j * i + "</br>");
  }
}
