function myFunction() {
  document.getElementById("menuDown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.menuBtn')) {
    var dropdowns = document.getElementsByClassName("menuContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}