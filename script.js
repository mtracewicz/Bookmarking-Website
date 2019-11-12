function showFloater() {
    body.classList.add("show-floater");
  }
  function hideFloater() {
    if (body.classList.contains("show-floater")) {
      body.classList.remove("show-floater");
    }
  }
  const body = document.body;
  const input = document.querySelector("input[type=text]");
  const overlay = document.querySelector(".overlay");

  input.addEventListener("focusin", showFloater);
  input.addEventListener("focusout", hideFloater);
  overlay.addEventListener("click", hideFloater);