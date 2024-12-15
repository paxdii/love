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
    const linkedDoors = [15]; // Türen, die Links sind

    if (currentDate.getMonth() + 1 < 12 || currentDate.getDate() < day) {
      // Türen für zukünftige Tage sperren
      innerNode.className = "disabled";
      innerNode.onclick = function () {
        return false;
      };
    } else if (linkedDoors.includes(day)) {
      innerNode.href =
        "https://at.pinterest.com/search/pins/?rs=ac&len=2&q=gingerbread%20house&eq=ginger&etslf=8476"; // Link-Ziel hier ändern
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
