const mustache = document.querySelector("#mustache");
console.log("hi class!");

function positionMustache(event) {
  // Log the event.
  console.log(event.pageX);

  // Add CSS to position the mustache.
  mustache.style.left = event.pageX - 50 + "px";
  mustache.style.top = event.pageY - 14 + "px";

  // Add CSS to the mustache to un-hide it.
  mustache.style.display = "block";
}

document.body.addEventListener("click", positionMustache);
