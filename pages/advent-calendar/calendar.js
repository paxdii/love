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
    const linkedDoors = [19]; // Türen, die Links sind

    if (currentDate.getMonth() + 1 < 12 || currentDate.getDate() < day) {
      // Türen für zukünftige Tage sperren
      innerNode.className = "disabled";
      innerNode.onclick = function () {
        return false;
      };
    } else if (linkedDoors.includes(day)) {
      innerNode.href =
        "https://www.loom.com/share/7c0367fca424455db30fb7d03300c044?sid=398f0a4a-5192-474b-a60a-d5e89b5c94bb"; // Link-Ziel hier ändern
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
