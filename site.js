
function getPictures(){

    var values = ["06.jpg","42.jpg","78.jpg","95.jpg"],
    valueToUse = values[Math.floor(Math.random() * values.length)];

    console.log(valueToUse); 
    

    document.getElementById("pictures").style.backgroundImage = 'url(' + valueToUse + ')';

}
