/*sidebar*/
function openNav() {
    document.getElementById("side-bar-into").style.width = "250px";
    document.getElementById("side-bar").style.marginLeft = "120px";
}
  
function closeNav() {
    document.getElementById("side-bar-into").style.width = "0";
    document.getElementById("side-bar").style.marginLeft= "0";

}
/*kesikli yazı*//* index.html Animasyonlarını bozuyor 
var textElement = document.getElementById("deneme");
var truncatedText = textElement.innerText.substring(0, 100);
textElement.innerText = truncatedText + "...";*/


/*kaydırmalı animasyonlar*/
  window.sr=new ScrollReveal()
  sr.reveal(".header>h1",{
    origin:"top",
    distance:"225px"
})
  sr.reveal(".recently-box",{
    delay:200,
    origin:"top",
    distance:"225px"
})

  sr.reveal(".demo", {
    delay:500,
    origin:"left",
    distance:"150px"
})

  sr.reveal("h5", {
    origin:"top",
    distance:"125px"
})
sr.reveal(".intro-text>#bilgi",{
  delay:500,
  origin:"top",
  distance:"225px"
})
sr.reveal(".intro-text>#klavyesi",{
  delay:500,
  origin:"left",
  distance:"225px"
})


