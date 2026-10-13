const form = document.querySelector("#table-form");
const numberInput = document.querySelector("#number-input");
const tableBody = document.querySelector("#table-body");
const resultsTitle = document.querySelector("#results-title");

function renderTable(number) {
  const rows = Array.from({ length: 10 }, (_, index) => {
    const multiplier = index + 1;
    const row = document.createElement("tr");
    const calculationCell = document.createElement("td");
    const answerCell = document.createElement("td");

    calculationCell.textContent = `${number} × ${multiplier}`;
    answerCell.textContent = String(number * multiplier);
    row.append(calculationCell, answerCell);
    return row;
  });

  tableBody.replaceChildren(...rows);
  resultsTitle.textContent = `The ${number} times table`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!numberInput.reportValidity()) {
    return;
  }

  const number = Number(numberInput.value);
  if (!Number.isInteger(number)) {
    numberInput.setCustomValidity("Enter a whole number.");
    numberInput.reportValidity();
    numberInput.setCustomValidity("");
    return;
  }

  renderTable(number);
});

numberInput.addEventListener("input", () => {
  numberInput.setCustomValidity("");
});

renderTable(Number(numberInput.value));
