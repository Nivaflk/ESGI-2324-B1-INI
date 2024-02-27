function addToBasket(Basket) {
    const basketTableBody = document.getElementById("basketTableBody");

    const row = document.createElement("tr");

    const cell = document.createElement("td");
    const cellText = document.createTextNode(Basket);
    cell.appendChild(cellText);
    row.appendChild(cell);

    basketTableBody.appendChild(row);
}