$(window).on("load", function () {
  // document.getElementById("container").style.visibility = "hidden";
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
    document.getElementById("container").style.visibility = "visible";
    document.getElementById("progressive").style.visibility = "hidden";
  }, 7000);
});
