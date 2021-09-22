var btnTranslate = document.querySelector("#btn-translate");
var input = document.querySelector("#input");
var output = document.querySelector("#output");

var URL = "https://api.funtranslations.com/translate/dothraki.json";

function constructURL(inputText) {
    return URL + "?text=" + inputText;
}

function errorHandler(error) {
    console.log("Error Occured : ", error);
    alert("Server Down. Try Again Later");
}

function doFetch(inputText) {
    
    fetch(constructURL(inputText))
    .then(response => response.json() )
    .then(json => 
        { var outputText = json.contents.translated;
          output.innerText = outputText;
        })
    .catch(errorHandler);
}

function translateHandler() {
    doFetch(input.value);
}

btnTranslate.addEventListener("click",translateHandler);