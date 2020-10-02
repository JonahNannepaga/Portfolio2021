console.log("app loaded");

$(document).ready(function () {
  /* --- Skills globe using tagcanvas --- */
  if (
    !$("#myCanvas").tagcanvas({
      textColour: "#fff",
      outlineThickness: 0.5,
      outlineColour: "#ffffff",
      maxSpeed: 0.04,
      freezeActive: true,
      shuffleTags: true,
      shape: "sphere",
      zoom: 1,
      noSelect: true,
      textFont: "PT Sans",
      pinchZoom: false,
      freezeDecel: true,
      fadeIn: 3000,
      initial: [0.3, -0.1],
      //   depth: 0.75,
    })
  ) {
    // TagCanvas failed to load
    $("#myCanvasContainer").hide();
  }
  /* --- Skills globe using tagcanvas --- */

  /* Navigation */
  const navItems = $(".navigation a");
  navItems.on("click", function (e) {
    navItems.removeClass("active");
    // $(this).addClass("active");
  });
  /* Navigation */
});

/* --- Global Cta button --- */
const buttons = document.querySelectorAll(".global-btn");

buttons.forEach((element) => {
  element.addEventListener("mousemove", (e) => {
    const span = element.lastChild;
    const x = e.offsetX;
    const y = e.offsetY;
    span.style.setProperty("--x", x + "px");
    span.style.setProperty("--y", y + "px");
    /* --- Global Cta button --- */
  });
});
