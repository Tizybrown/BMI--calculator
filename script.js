window.onload = () => {
  const button = document.querySelector("#btn");
  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  const result = document.querySelector("#result");

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  const bmi = weight / (height / 100) ** 2;

  if (bmi < 18.5) {
    result.innerHTML = `Underweight: ${bmi.toFixed(2)}`;
  } else if (bmi < 24.9) {
    result.innerHTML = `Normal weight: ${bmi.toFixed(2)}`;
  } else if (bmi < 29.9) {
    result.innerHTML = `Overweight: ${bmi.toFixed(2)}`;
  } else {
    result.innerHTML = `Obese: ${bmi.toFixed(2)}`;
  }
}
