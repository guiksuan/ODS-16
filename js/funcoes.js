xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/conteudo.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("conteudo");
function titulo1() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<h1 class='text-center mt-3'>" +
            x[i].getElementsByTagName("titulo1")[0].childNodes[0].nodeValue +
            "</h1>");
    }
}

function titulo2() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<h1 class='text-center'>" +
            x[i].getElementsByTagName("titulo2")[0].childNodes[0].nodeValue +
            "</h1>");
    }
}


function texto1() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<h2 class='mt-5 pt-5'>" +
            x[i].getElementsByTagName("texto1")[0].childNodes[0].nodeValue +
            "</h2>");
    }
}

function texto2() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<h2 class='mt-5 pt-4'>" +
            x[i].getElementsByTagName("texto2")[0].childNodes[0].nodeValue +
            "</h2>");
    }
}


function titulo3() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<h1 class='pt2 text-center mt-5'>" +
            x[i].getElementsByTagName("titulo3")[0].childNodes[0].nodeValue +
            "</h1>");
    }
}

function meta1() {
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p>" +
            x[i].getElementsByTagName("meta1")[0].childNodes[0].nodeValue +
            "</p>");
    }
}
