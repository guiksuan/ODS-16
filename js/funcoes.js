//Criar uma variável para manipular o XML
xmlhttp = new XMLHttpRequest();
//Seleciona o arquivo XML
xmlhttp.open("GET","xml/conteudo.xml",false);
//Enviar o arquivo para a leitura
xmlhttp.send();
//Informar que o arquivo enviado é um XML
xmlDoc = xmlhttp.responseXML;

x = xmlDoc.getElementsByTagName("conteudo")
y = xmlDoc.getElementsByTagName("noticia")

function postagemPequena() {
  for(i= y.length-1;i>=0;i--){
    resto = i % 2;
    if(resto == 1){
    document.write("<div class='row'><div class='col-md-1'></div><div class='col-md-5'> <div class='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'> <div class='col p-4 d-flex flex-column position-static'> <strong class='d-inline-block mb-2 text-primary'>ODS 14</strong><h4 class='mb-0'>" + y[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h4> <div class='mb-1 text-muted'>"+  y[i].getElementsByTagName("data")[0].childNodes[0].nodeValue +"</div><p class='card-text mb-auto'>"+  y[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,100) + "...</p><a href='noticia.html?codigo_noticia=" + i + "' class='stretched-link'>Continue Lendo...</a></div><div class='col-auto d-none d-lg-block'><img src='imgs/"+ y[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"' width='200' height='250'></div></div></div>");
    }
    else{
      document.write("<div class='col-md-5'> <div class='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'> <div class='col p-4 d-flex flex-column position-static'> <strong class='d-inline-block mb-2 text-primary'>ODS 14</strong><h4 class='mb-0'>" + y[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h4> <div class='mb-1 text-muted'>"+  y[i].getElementsByTagName("data")[0].childNodes[0].nodeValue +"</div><p class='card-text mb-auto'>"+  y[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,100) + "...</p><a href='noticia.html?codigo_noticia=" + i + "' class='stretched-link'>Continue Lendo...</a></div><div class='col-auto d-none d-lg-block'><img src='imgs/"+ y[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"' width='200' height='250'></div></div></div></div>");
    }
  }
  }
  
  function corpoPostagem(){
      url = new URL(window.location.href)
      parametro = url.searchParams;
      i = parametro.get("codigo_noticia"); 
  
     var corpo = y[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue;
     var corpopronto = corpo.replace("\n","<br>")
    document.write(corpopronto)
  }
  
  
  function tituloPostagem(){
      url = new URL(window.location.href)
      parametro = url.searchParams;
      i = parametro.get("codigo_noticia"); 
  
    document.write(y[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue)
  }
  
  function dataPostagem(){
      url = new URL(window.location.href)
      parametro = url.searchParams;
      i = parametro.get("codigo_noticia"); 
  
    document.write(y[i].getElementsByTagName("data")[0].childNodes[0].nodeValue)
  }
  
  function imagemPostagem(){
      url = new URL(window.location.href)
      parametro = url.searchParams;
      i = parametro.get("codigo_noticia"); 
      
      document.write("<center><img src='imgs/"+ y[i].getElementsByTagName("imgpostagem")[0].childNodes[0].nodeValue +"' width='80%' style='margin-top: 00px;border-radius: 10px;'></center>")
  }
  
  function fontePostagem(){
      url = new URL(window.location.href)
      parametro = url.searchParams;
      i = parametro.get("codigo_noticia"); 
  
    document.write("fonte: "+y[i].getElementsByTagName("fonte")[0].childNodes[0].nodeValue)
  }