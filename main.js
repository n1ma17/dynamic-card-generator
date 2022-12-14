function cardGenerator(m, n, id) {
  const view = document.getElementById(id);
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
    const total = document.getElementsByClassName('card').length
    erase = Math.floor(Math.random() * total);
    // document.getElementsByClassName('card')[erase].remove()
    document.getElementsByClassName('card')[erase].classList.add('removedCard')
  } else alert("please insert rows and columns");
}

cardGenerator(6, 4, "view");
