let lig = document.getElementById("ligar")
let des = document.getElementById("desligar")
let lamp = document.getElementById("lampada")

function isbroken() {
    return lamp.src.indexOf("quebrada") > -1
}

function ligar() {
    if (!isbroken()) {

    lamp.src = "./lampadaon.jpg"}
}

function desligar() {
    if (!isbroken()){
    
     lamp.src = "./desligada.jpg"}    
}

function quebrar() {
    lamp.src = "./lapadaquebrada.jpg"
}

lig.addEventListener("click",ligar)
des.addEventListener("click",desligar)
lamp.addEventListener("mouseover", ligar)
lamp.addEventListener("mouseleave",desligar)
lamp.addEventListener("dblclick",quebrar)
lamp.addEventListener("dblclick", isbroken)

