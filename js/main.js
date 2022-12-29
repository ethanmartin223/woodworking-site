function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("corner-logo").classList.remove('fade-in');
  document.getElementById("corner-logo").classList.toggle('fade-out');

}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "25px";
  document.getElementById("corner-logo").classList.toggle('fade-in');
  document.getElementById("corner-logo").classList.toggle('fade-out');
}
