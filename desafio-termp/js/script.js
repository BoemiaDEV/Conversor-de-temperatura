let div = document.getElementById("resp");

function celsius() {
    let num_1 = parseInt(document.getElementById("i_celsius").value);
    let converter = num_1 * 1.8;
    let text = converter + "°F";
    let pou = ""
    if(text === " "){
        pou = "Por Favor insira uma valor valido"
    }else{
        pou = `O valor em Fahrenheit é ${text} e o valor em Kelvin é ${num_1 + 273.15 + "°k"}`
    }

    div.innerHTML = pou;
}

function fahrenheit(){
    let num_f = parseInt(document.getElementById("i_fahrenheit").value)
    let converter = num_f - 32;
    let text = converter + "°C";
    let pou = ""

    if(text === " "){
        pou = "Por Favor insira uma valor valido"
    }else{
        pou = `O valor em Celsius é ${text} e o valor em Kelvin é ${num_f + 459.67 + "°k"}`
    }

    div.innerHTML = pou;
}