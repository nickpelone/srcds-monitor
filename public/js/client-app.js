/* jshint browser:true, jquery:true */
(function () {
    //
    function constructPaperItem(label, icon) {
        var paperItem = "<paper-item icon='" + icon + "' label='" + label + "'></paper-item>";
        return paperItem;
    }
    function constructPaperButton(label) {
        var paperButton = "<paper-button>" + label + "</paper-button>";
        return paperButton;
    }
    function handleWorkshopMap(input) {
        var returnable;
        console.log(input.substring(0,8));
        if(input.substring(0,8) === "workshop") {
            //slice off the workshop stuff
            returnable = input.substring(19,input.length);
        } else{
            returnable = input;
        }
        return returnable;
    }

    function update() {
        $.getJSON("/server1.json", function (data) {
           $("#server1").html("");
            $("#server1").append(constructPaperItem(data.serverName,"cloud-queue"));
            $("#server1").append(constructPaperItem("Game: " + data.gameName,"description"));
            $("#server1").append(constructPaperItem("Players: " + data.numPlayers + "/" + data.maxPlayers, "account-circle"));
            $("#server1").append(constructPaperItem("Current Map: " + handleWorkshopMap(data.map) , "file-map"));

            $("#server1").append("<a href='steam://connect/srcds.nickpelone.com:27015'>"+ constructPaperButton("Click here to join") + "</a>");
        });
        $.getJSON("/server2.json", function (data) {
            $("#server2").html("");
            $("#server2").append(constructPaperItem(data.serverName,"cloud-queue"));
            $("#server2").append(constructPaperItem("Game: " + data.gameName,"description"));
            $("#server2").append(constructPaperItem("Players: " + data.numPlayers + "/" + data.maxPlayers, "account-circle"));
            //$("#server2").append("Current Map: " + data.map + "<br>");
            $("#server2").append(constructPaperItem("Current Map: " + handleWorkshopMap(data.map), "file-map"));
            $("#server2").append("<a href='steam://connect/srcds.nickpelone.com:27016'>"+ constructPaperButton("Click here to join") + "</a>");
        });
    }



    $(document).ready(function () {
        update();
        $("#button").click(function() {
            update();
        });
    });
}());
