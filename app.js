/*
var alturaHoja = 26;
var anchoHoja = 19;

document.getElementById('calcular').addEventListener("click", function(){
    let altoSticker = document.getElementById("alto").value;
    let anchoSticker = document.getElementById("ancho").value; 
    let cantidadStickers = document.getElementById("cantidad").value;

    if(altoSticker > 0 && anchoSticker > 0 && cantidadStickers > 0){
        if(altoSticker < alturaHoja && anchoSticker < anchoHoja){
            let stickersAltura =  Math.trunc(alturaHoja/altoSticker);
            let stickersAncho = Math.trunc(anchoHoja/anchoSticker);
            
            let cantidadStickerHoja = stickersAltura*stickersAncho;
            let cantidadHojas = cantidadStickers/cantidadStickerHoja;
            alert(`La cantidad de stickers por hoja es ${cantidadStickerHoja}, Se necesitan ${cantidadHojas} hojas`)
            
        }else{
            alert("Busca el trabajo en otro lado");
        }
    }else{
        alert('Faltan datos');
    }
});
*/

var areaHoja = 494;

document.getElementById('calcular').addEventListener("click", function(){
    let altoSticker = document.getElementById("alto").value;
    let anchoSticker = document.getElementById("ancho").value;
    let cantidadStickers = document.getElementById("cantidad").value; 

    let areaStickers = altoSticker*anchoSticker;
    let areaTotal = cantidadStickers*areaStickers;

    alert(areaTotal/areaHoja);
});
