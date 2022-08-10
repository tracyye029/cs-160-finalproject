$(document).ready(function() {
    $("#used").click(function() {
        $("#used").removeClass('inactive-use-status');
        $("#used").addClass("active-use-status");
        $("#notused").removeClass('active-use-status');
        $("#notused").addClass("inactive-use-status");
    });
    $("#notused").click(function() {
        $("#notused").removeClass('inactive-use-status');
        $("#notused").addClass("active-use-status");
        $("#used").removeClass('active-use-status');
        $("#used").addClass("inactive-use-status");
    });
});