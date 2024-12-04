const adventDoors = document.getElementById("adventDoors");
const currentDate = new Date();

function Door(day) {
  this.adventMessage = day + ". Dezember\n\n" + messages[day - 1][0];

  this.content = function () {
    const node = document.createElement("li");
    adventDoors.appendChild(node);

    const innerNode = document.createElement("a");
    node.appendChild(innerNode);
    innerNode.innerHTML = day;
    innerNode.href = "#";
    const linkedDoors = [4]; // Beispiel: Tür 5 ist ein Link

    if (currentDate.getMonth() + 1 < 12 || currentDate.getDate() < day) {
      // Türen für zukünftige Tage sperren
      innerNode.className = "disabled";
      innerNode.onclick = function () {
        return false;
      };
    } else if (linkedDoors.includes(day)) {
      // Spezielle Türen mit Links (nur, wenn das Datum erreicht ist)
      innerNode.href =
        "https://www.loom.com/share/826106da9bbc448cabdf2966f8f7778f?sid=5d19ddb4-bb67-4c1b-8075-f477a410dcd2"; // Link-Ziel hier ändern
      innerNode.target = "_blank"; // Öffnet in neuem Tab
    } else {
      const adventMessage = this.adventMessage;
      innerNode.onclick = function () {
        alert(adventMessage);
        return false;
      };
    }
  };
}

(function () {
  for (let i = 1; i <= 24; i++) {
    const door = new Door(i);
    door.content();
  }
})();
