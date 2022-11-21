xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/conteudo.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("content");
function imgmao(){
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<img src='img/" + x[i].getElementsByTagName("img-mao")[0].childNodes[0].nodeValue + "' class='img-fluid mao'>");
    }
}
function titulo(){
    for  (i = x.length - 1; i >= 0; i--)  {
        document.write ( " <h1 class=' text-center mt-3'> "+ x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1>")
    }
}
