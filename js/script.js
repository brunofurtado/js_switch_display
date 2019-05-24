function fn_show_provider() {
  var x = document.getElementById("provider_list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}