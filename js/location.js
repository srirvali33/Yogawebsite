$(document).ready(function () {

    $( "#questionsubmit" ).click(function() {


        $("label").hide();
        $("input").hide();
        $("textarea").hide();
        $("button").hide();
        document.getElementById("message").innerHTML = "Your message was recorded!";            

    });


});