
window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
  });
  
  function elemekElerese1() {
    //const ELEM = document.querySelectorAll("section h2")[0];
    //console.log(ELEM.innerHTML);
    const ELEM = $("section h2").eq(0);
    console.log(ELEM.HTML());
    
  }
  function elemekElerese2() {
    //const ELEM = document.querySelectorAll("#ide")[0];
    //ELEM.innerHTML = "<p>Jó reggelt!</p>";
    const ELEM = $("#ide").eq(0);
    ELEM.HTML("<p>Jó reggelt!</p>");

  }
  function elemekElerese3() {
    //const ELEM = document.querySelectorAll(".ide")[0];
    //ELEM.innerHTML = "<p>Jó reggelt!</p>";
    const ELEM = $(".ide").eq(0);
    ELEM.HTML("<p>Jó reggelt!</p>");
  }
  
  function elemekElerese4() {
    //const LISTA = document.querySelectorAll(".lista");
    const LISTA = $(".lista");
  
    //let txt = "<ul>";
    //for (let i = 0; i < 5; i++) {
      //txt += <li>${Math.floor(Math.random() * 20 + 10)}</li>;
    //}
    //txt += "</ul>";
    //console.log(txt);
    //LISTA[0].innerHTML = txt
    //return LISTA

    let txt.append("<ul>");
    for (let i = 0; i < 5; i++) {
        txt.append("<li>${Math.floor(Math.random() * 20 + 10)}</li>");
      }
    txt.append("</ul>");
    console.log(txt);
    LISTA.eq(0).html(txt);
    return LISTA;


  }
  
  function elemekFormazasa1(){
      //const LISTA2 = document.querySelectorAll(".lista"); 
      //LISTA2[0].classList.add("formazott") 
      
      const LISTA2 = $(".lista");
      LISTA2.eq(0).addClass("formazott");

  }