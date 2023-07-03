const hands = document.querySelectorAll(".hand");

window.setInterval(function () {
  const date = new Date();
  const time = [date.getSeconds(), date.getMinutes(), date.getHours()];
  for (const [index, hand] of hands.entries()) {
    if (index === 2) {
      hand.style.transform = `rotate(${(time[index] / 12) * 360}deg)`;
    } else {
      hand.style.transform = `rotate(${(time[index] / 60) * 360}deg)`;
    }
  }
  const LED = document.querySelector(".hLED");
  LED.style.transform = `
        rotate(${(date.getHours() / 12) * 360}deg)`;
}, 1000);

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
