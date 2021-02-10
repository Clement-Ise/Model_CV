// On cible les éléments à modifier
var toggle = document.querySelector(".nav-container-toggle")
var nav = document.querySelector(".btn_actions_personne")
var nav1 = document.querySelector(".btn_actions_reseau")
var nav2 = document.querySelector(".btn_actions_poste")
var nav3 = document.querySelector(".btn_actions_experiencePro")
var nav4 = document.querySelector(".btn_actions_outils")
var nav5 = document.querySelector(".btn_actions_footer")
var nav6 = document.querySelector(".btn_actions_hobbie")

var page = document.documentElement

// La fonction permettant de basculer l'affichage en ajoutant/supprimant des classes
function doToggle() {
  this.classList.toggle("-open")
  nav.classList.toggle("-open")
  nav1.classList.toggle("-open")
  nav2.classList.toggle("-open")
  nav3.classList.toggle("-open")
  nav4.classList.toggle("-open")
  nav5.classList.toggle("-open")
  nav6.classList.toggle("-open")
}

// La fonction doToggle() est appelé lorsqu'on clique sur l'icone de menu
toggle.addEventListener("click", doToggle)
