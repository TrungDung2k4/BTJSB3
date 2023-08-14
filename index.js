// Bài 1
document.getElementById("sortingNumbers").onclick = () => {
  var Number1 = +document.getElementById("Number1").value;
  var Number2 = +document.getElementById("Number2").value;
  var Number3 = +document.getElementById("Number3").value;
  var minValue = Math.min(Number1, Number2, Number3);
  var maxValue = Math.max(Number1, Number2, Number3);
  var midValue;
  if (Number1 > minValue && Number1 < maxValue) midValue = Number1;
  else if (Number2 > minValue && Number2 < maxValue) midValue = Number2;
  else midValue = Number3;
  document.getElementById(
    "sortedNumbers"
  ).innerHTML = `${minValue} - ${midValue} - ${maxValue}`;
};
// Bài 2
document.getElementById("welcome").onclick = () => {
  var member =
    document.getElementById("member").options[
      document.getElementById("member").selectedIndex
    ].value;
  var welcome = "Chào ";
  if (member === "B") welcome += "Bố";
  else if (member === "M") welcome += "Mẹ";
  else if (member === "A") welcome += "Anh Trai";
  else welcome += "Em Gái";
  document.getElementById("welcomed").innerHTML = welcome;
};
// Bài 3
document.getElementById("countingNumberTypes").onclick = () => {
  var Num1 = +document.getElementById("Num1").value;
  var Num2 = +document.getElementById("Num2").value;
  var Num3 = +document.getElementById("Num3").value;
  var countOdd = (Num1 % 2) + (Num2 % 2) + (Num3 % 2);
  var countEven = 3 - countOdd;
  document.getElementById(
    "countedNumberTypes"
  ).innerHTML = `Lẻ: ${countOdd} - Chẵn: ${countEven}`;
};
// Bài 4
document.getElementById("identifyingTriangleTypes").onclick = () => {
  var Edge1 = +document.getElementById("Edge1").value;
  var Edge2 = +document.getElementById("Edge2").value;
  var Edge3 = +document.getElementById("Edge3").value;
  var condition1 = Edge1 === Edge2 && Edge2 === Edge3;
  var condition2 = Edge1 === Edge2 || Edge2 === Edge3 || Edge1 === Edge3;
  var condition3 =
    Edge1 * Edge1 + Edge2 * Edge2 === Edge3 * Edge3 ||
    Edge1 * Edge1 + Edge3 * Edge3 === Edge2 * Edge2 ||
    Edge3 * Edge3 + Edge2 * Edge2 === Edge1 * Edge1;
  var type;
  if (condition1) type = "Tam Giác Đều";
  else if (condition2 && condition3) type = "Tam Giác Vuông Cân";
  else if (condition2) type = "Tam Giác Cân";
  else if (condition3) type = "Tam Giác Vuông";
  else type = "Tam Giác Thường";
  document.getElementById("identifiedTriangleTypes").innerHTML = type;
};
