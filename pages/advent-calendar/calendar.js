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

    if (currentDate.getMonth() + 1 < 12 || currentDate.getDate() < day) {
      innerNode.className = "disabled";
      innerNode.onclick = function () {
        return false;
      };
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
