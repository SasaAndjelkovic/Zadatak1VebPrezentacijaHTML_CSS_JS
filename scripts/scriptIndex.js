$(document).ready(function(){
    $("#fname").on("focus blur", function (e) {
        if (e.type == "focus") {
            $(this).css("background-color", "#ed7b7b");
        } else {
            $(this).css("background-color", "#ffffff");
        }
    });
    $("#passw").on("focus blur", function (e) {
        if (e.type == "focus") {
            $(this).css("background-color", "#ed7b7b");
        } else {
            $(this).css("background-color", "#ffffff");
        }
    });
    $("input").keypress(function(){
        if ($(this).val().length > 3) {
            $(this).css("background-color", "rgba(32, 145, 7, 0.5)");
        };
    });
});

$("input[value='posalji']").click(function (e) {
    e.preventDefault();
    $(".wrap").hide();
    $(".pozdrav").height( 70 );
    $(".pozdrav").css({"pading":"5%"});
    let $text = "";
    if ($("#fname").val().length < 5 || $("#passw").val().length < 5) {
        $text = "Korisnicko ime ili lozinka su kraci od 5 karaktera!"
    } else {
        $text = $("#fname").val() + "!";
    }
    $(".pozdrav").html("Dobrodosli, " + $text);
});