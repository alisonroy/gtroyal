$(window).on("load", function () {
  document.getElementById("container").style.visibility = "hidden";
  /* Progress Bar animation */
  $(".progress-bar").animate(
    {
      width: "100%",
    },
    250
  ); // start in under a sec
});

$(document).on("ready", function () {
  setTimeout(function () {
    document.getElementById("progressive").style.visibility = "hidden";
    document.getElementById("container").style.visibility = "visible";
  }, 8000);
});
