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

function porra(){
    document.write(
        "<div class='row d-flex px-2 my-4'>" +
          "<div id='title-text-color' class='d-flex col-6 col-md-12 justify-content-center h2'>" +
          x[i].getElementsByTagName("titulo1")[0].childNodes[0].nodeValue +
          "</div>" +
        "</div>" +
        "<div class='container'>" +
           "<a class='h4 text-decoration-none text-light'>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</a>" +
        "</div>"
    );
}