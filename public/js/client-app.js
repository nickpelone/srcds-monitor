/* jshint browser:true, jquery:true */
(function () {
    //
    function update() {
        $.getJSON("/servers.json", function (data) {
            $("#server").html("");
            $("#server").append("Name: " + data.serverName + "<br>");
            $("#server").append("Game: " + data.gameName + "<br>");
            $("#server").append("Players: " + data.numPlayers + "/" + data.maxPlayers + "<br>");
            $("#server").append("Current Map: " + data.map + "<br>");
            $("#server").append("<a href='steam://connect/srcds.nickpelone.com:27015'>Click here to join</a>");
        });
    }

    $(document).ready(function () {
        update();
        $("#button").click(function() {
            update();
        });
    });
}());
