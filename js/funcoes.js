//Criar uma variável para manipular o XML
xmlhttp = new XMLHttpRequest();
//Seleciona o arquivo XML
xmlhttp.open("GET","xml/conteudo.xml",false);
//Enviar o arquivo para a leitura
xmlhttp.send();
//Informar que o arquivo enviado é um XML
xmlDoc = xmlhttp.responseXML;

y = xmlDoc.getElementsByTagName("postagem");
x = xmlDoc.getElementsByTagName("noticia");

function postagemPequena() {
  for(i= y.length-1;i>=0;i--){
    document.write(
    "<div class='col'>" +
      "<div class='card mt-5' style='width: 22rem;'>" +
        "<img src='img/" + y[i].getElementsByTagName("img-blog")[0].childNodes[0].nodeValue +"' class='card-img-top' alt='...'>" +
        "<div class='card-body'>" +
          "<h4 class='card-title'>" +y[i].getElementsByTagName("titulo-blog")[0].childNodes[0].nodeValue + "</h4>" + "<p class='card-text'>" + y[i].getElementsByTagName("corpo-blog")[0].childNodes[0].nodeValue.substr(0,100) +"</p>" + "</div>" +
          "<div class='card-body'>" +
            "<a href='blog.html?codigo_noticia=" + i +"' class='card-link'>Continue lendo</a>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
    }
  }

  function mostrarPostagem(){
    url = new URL(window.location.href);
    parametro = url.searchParams;
    i = parametro.get("codigo_noticia");
    document.write(
    "<div>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</div>" + 
    "<div>" + x[i].getElementsByTagName("data")[0].childNodes[0].nodeValue + "</div>" +
    "<div class='col-auto d-none d-lg-block'>" +
    "<img src='img/"+ x[i].getElementsByTagName("imgpostagem")[0].childNodes[0].nodeValue + "' width='200' height='250'>" + 
    "</div>" +
    "<div>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</div>"
    )
  }
