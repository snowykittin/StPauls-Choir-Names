//show all names
function showAllNames(){
    $(".name").removeClass("hidden");
}
//hide all names
function hideAllNames(){
    $(".name").addClass("hidden");
}

//toggle name on click
$(".headshot").on("click", (e) => {
    $("#" + e.target.id + " .name").toggleClass("hidden");
})