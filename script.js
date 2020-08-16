document.querySelectorAll(".MapSelect").forEach(item => {
    item.addEventListener("click", function () {
        changeMap(item.id);
    }, false);
});

function changeMap(mapName) {
    document.getElementById("map").src = "assets/maps/" + mapName + ".svg" 
}
    