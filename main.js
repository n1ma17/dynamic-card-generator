const view = document.getElementById("view");

function cardGenerator(m, n) {
  const numbers = Array.from({ length: m * n }, (_, i) => i + 1);
  if (m && n) {
    for (let i = 0; i < m; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      view.appendChild(row);
      for (let j = 0; j < n; j++) {
        const cardNumber = numbers.splice(
          Math.floor(Math.random() * numbers.length),
          1
        );
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerText = cardNumber;
        row.appendChild(card);
      }
    }
  }else alert('please insert rows and columns')
}

cardGenerator(6, 4);
