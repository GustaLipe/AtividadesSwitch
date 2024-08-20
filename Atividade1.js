var moeda = "Euro"
var valor = 50

switch (moeda){
    case "Dolar":{
        var valorfinal = valor / 9.14
        console.log (`Dolar ${valorfinal}`)
        break
    }
    

    case "Euro":{
        var valorfinal = valor / 6.09
            console.log (`Euro ${valorfinal}` )
            break
    }

    case "Libra":{
        var valorfinal = valor / 4.50
        console.log (`Libra ${valorfinal}`)
        break
    }
}