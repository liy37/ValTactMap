document.querySelectorAll(".MapSelect").forEach(item => {
    item.addEventListener("click", function () {
        changeMap(item.id);
    }, false);
});

function changeMap(mapName) {
    var currMap = document.getElementById("map")
    currMap.src = "assets/" + mapName + ".svg" 
}