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
    document.getElementById("progressive").classList.add("d-none");
    document.getElementById("container").classList.remove("d-none");
    document.getElementById("container").classList.add("d-block");
  }, 8000);
});
