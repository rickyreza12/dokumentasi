//variable
let tabcontent = document.querySelectorAll(".tabcontent");
let navbar = document.querySelector(".navbar");
let mainbody = document.getElementsByTagName("main")
let minWidth = window.matchMedia("(min-width: 600px)")
let maxWidth = window.matchMedia("(max-width: 600px)")
let input = document.querySelectorAll(".keyword")
let card = document.querySelectorAll(".card")

//state start
function ready(f) { /in/.exec(document.readyState) ? setTimeout('ready(' + f + ')', 9) : f() }

ready(function () {
    tabcontent.forEach(element => {
        if (element.id != "Documentation") {
            element.style.display = "none";
        }
    });

})

navbar.onmouseover = function () {
    tabcontent.forEach(element => {
        if (minWidth.matches) {
            element.style.marginLeft = "22rem";
            element.style.transition = "600ms";
        } else {
            element.style.marginLeft = ""
            element.style.transition = "600ms";
        }
    });
}

navbar.onmouseleave = function () {
    tabcontent.forEach(element => {
        if (minWidth.matches) {
            element.style.marginLeft = "5rem";
        } else {
            element.style.marginLeft = ""
            element.style.transition = "600ms";
        }
    });
}

navbar.onclick = function () {
    // alert("hello")
    input.forEach(element => {
        element.value = ""
    })

    card.forEach(element => {
        element.style.display = ""
    })
}

//goesto
function goesto(currentevent, titleid) {
    tabcontent.forEach(element => {
        element.style.display = "none";
    })
    document.getElementById(titleid).style.display = "block";
}

//filter
function filterCard(event) {

    let filter = event.currentTarget.value.toUpperCase();
    let valuePer, textValue;

    for (let index = 0; index < card.length; index++) {
        valuePer = card[index].children[0].children[0]
        textValue = valuePer.textContent || valuePer.innerText
        console.log(textValue);
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            card[index].style.display = ""
        } else {
            card[index].style.display = "none"
        }
    }

}

