function openDoc(occassion, titledoc) {
  let tabcontent, i, tabklik;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tabklik = document.getElementsByClassName("tabklik");
  for (i = 0; i < tabklik.length; i++) {
    tabklik[i].className = tabklik[i].className.replace(" active", "");
  }

  document.getElementById(titledoc).style.display = "block";
  occassion.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

// console.log(event);
