//your JS code here. If required.
//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
  let inputValue = document.getElementById("ip").value;
  let outputDiv = document.getElementById("output");

  if (!inputValue) {
    outputDiv.innerHTML = "Please enter a number.";
    return;
  }

  let number = parseFloat(inputValue);
  outputDiv.innerHTML = "";

  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.innerHTML = `Result: ${number}`;
      resolve(number);
    }, 2000);
  })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          result *= 2;
          outputDiv.innerHTML = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          result -= 3;
          outputDiv.innerHTML = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          result /= 2;
          outputDiv.innerHTML = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          result += 10;
          outputDiv.innerHTML = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    });
});
