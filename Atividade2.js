var valorfinal
var valora = 10
var valorb = 20
var operacao = "Soma"

switch (operacao){
    case "Soma":{
        var valorfinal = valora + valorb
        console.log (`Soma ${valorfinal}`)
        break
    }

    case "Subtracao":{
        var valorfinal = valora - valorb
        console.log (`Subtracao ${valorfinal}`)
        break
    }

    case "Multiplicacao":{
        var valorfinal = valora * valorb
        console.log (`Multiplicacao ${valorfinal}`)
        break
    }

    case "Divisao":{
        var valorfinal = valora / valorb
        console.log (`Multiplicacao ${valorfinal}`)
    }

}