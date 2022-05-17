




// let userName="Barış Güngör";
document.querySelector("#aboutinfo").innerHTML = ageCalculator()

function ageCalculator() {
  let currentYearVal = new Date();
  currentYearVal = currentYearVal.getFullYear();
  let bornYearVal = 2000;
  let ageVal = currentYearVal - bornYearVal;
  console.log(ageVal);
  return ageVal;
}
