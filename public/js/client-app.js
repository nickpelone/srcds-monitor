/* jshint browser:true, jquery:true */
(function () {
    //
    function update() {
        $.getJSON("/server1.json", function (data) {
            $("#server1").html("");
            $("#server1").append("Name: " + data.serverName + "<br>");
            $("#server1").append("Game: " + data.gameName + "<br>");
            $("#server1").append("Players: " + data.numPlayers + "/" + data.maxPlayers + "<br>");
            $("#server1").append("Current Map: " + data.map + "<br>");
            $("#server1").append("<a href='steam://connect/srcds.nickpelone.com:27015'>Click here to join</a>");
        });
        $.getJSON("/server2.json", function (data) {
            $("#server2").html("");
            $("#server2").append("Name: " + data.serverName + "<br>");
            $("#server2").append("Game: " + data.gameName + "<br>");
            $("#server2").append("Players: " + data.numPlayers + "/" + data.maxPlayers + "<br>");
            $("#server2").append("Current Map: " + data.map + "<br>");
            $("#server2").append("<a href='steam://connect/srcds.nickpelone.com:27016'>Click here to join</a>");
        });
    }

    $(document).ready(function () {
        update();
        $("#button").click(function() {
            update();
        });
    });
}());
