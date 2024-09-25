const d0 = document.getElementsByClassName("box-interactive")[0];
const d1 = document.getElementsByClassName("box-interactive")[1];
const d2 = document.getElementsByClassName("box-interactive")[2];
const d3 = document.getElementsByClassName("box-interactive")[3];
const d4 = document.getElementsByClassName("box-interactive")[4];
const nu = document.getElementsByClassName("box-thank__number")[0]
const bu = document.getElementsByClassName("box-interactive__buttom")[0];

d0.addEventListener("click", function() {
    d0.classList.toggle("box-interactive__toggle");
    d1.classList.remove("box-interactive__toggle");
    d2.classList.remove("box-interactive__toggle");
    d3.classList.remove("box-interactive__toggle");
    d4.classList.remove("box-interactive__toggle");
    nu.innerHTML = d0.innerText
});

d1.addEventListener("click", function() {
    d1.classList.toggle("box-interactive__toggle");
    d0.classList.remove("box-interactive__toggle");
    d2.classList.remove("box-interactive__toggle");
    d3.classList.remove("box-interactive__toggle");
    d4.classList.remove("box-interactive__toggle");
    nu.innerHTML = d1.innerText
});

d2.addEventListener("click", function() {
    d2.classList.toggle("box-interactive__toggle");
    d0.classList.remove("box-interactive__toggle");
    d1.classList.remove("box-interactive__toggle");
    d3.classList.remove("box-interactive__toggle");
    d4.classList.remove("box-interactive__toggle");
    nu.innerHTML = d2.innerText
});

d3.addEventListener("click", function() {
    d3.classList.toggle("box-interactive__toggle");
    d0.classList.remove("box-interactive__toggle");
    d1.classList.remove("box-interactive__toggle");
    d2.classList.remove("box-interactive__toggle");
    d4.classList.remove("box-interactive__toggle");
    nu.innerHTML = d3.innerText
});

d4.addEventListener("click", function() {
    d4.classList.toggle("box-interactive__toggle")
    d0.classList.remove("box-interactive__toggle")
    d1.classList.remove("box-interactive__toggle")
    d2.classList.remove("box-interactive__toggle")
    d3.classList.remove("box-interactive__toggle")
    nu.innerHTML = d4.innerText
});

bu.addEventListener("click", function(){
    if ( nu.innerHTML == 1 | nu.innerHTML == 2 | nu.innerHTML == 3 | nu.innerHTML == 4 | nu.innerHTML == 5 ) {
        document.getElementById("box-interactive").style.display = "none"
        document.getElementById("box-thank").style.display = "flex"
    }
})






