

var btn = document.querySelector('#btnAbrir');
var container = document.querySelector('.sidebar-container');

btn.addEventListener('click', function(){
  if(container.style.display === 'none') {
    container.style.display = 'block';
  } else {
    container.style.display = 'none';
  }

});



function verMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnVerMais=document.getElementById("btnVerMais")

    if(pontos.style.display ==="none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnVerMais.innerHTML="Ver Mais";
    } else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnVerMais.innerHTML="";
    }
}


function criarTopico() {
    document.getElementById("formulario-box").style.display = "block";
    document.getElementById("discussoes-box").style.display = "none";
    document.getElementById("formulario-enviado-box").style.display = "none";
    document.getElementById("assunto-label").value = "";
    document.getElementById("conteudo-label").value = "";
  }
  
  function enviarTopico() {
    document.getElementById("formulario-box").style.display = "none";
    document.getElementById("formulario-enviado-box").style.display = "flex";
  }
  
  function abrirTopico() {
    let topicoComResposta = document.getElementById("topico-resposta");
    let respostas = document.getElementById("respostas");
    let tresPontos = document.getElementById("tres-pontos");
    let mais = document.getElementById("mais-pergunta-topico");
  
    if (respostas.style.display === "none") {
      respostas.style.display = "block";
      topicoComResposta.style.marginBottom = "0";
      tresPontos.style.display = "none";
      mais.style.display = "flex";
    } else {
      respostas.style.display = "none";
      topicoComResposta.style.marginBottom = "1.6rem";
      tresPontos.style.display = "inline";
      mais.style.display = "none";
    }
  }
  abrirTopico();