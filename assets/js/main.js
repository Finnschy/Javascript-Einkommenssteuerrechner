// 1. Fall: zvE <= 9.408 Euro -> ESt = 0
// 2. Fall: 9.409 Euro <= zvE <= 14.532 Euro -> y = (zvE - 9408) / 10000
                                                //    ESt = (972.87 * y + 1400) * y
// 3. Fall: 14.533 Euro <= zvE <= 57.051 Euro -> z = (zvE - 14532) / 10000
                                                //  ESt = (212.02 * z + 2397) * z + 972.79
// 4. Fall: 57052 <= zvE <= 270500 -> ESt = 0.42 * zvE - 8963.74
// 5. Fall: 270.501 <= zvE                     -> ESt = 0.45 * zvE - 17078.74

// Für Personen, die zusammen gelegt werden: 2 * ESt


function test() {
event.preventDefault()
let zvE = parseInt(document.getElementById("numInput").value)
let married = document.getElementById("married").checked 
let single = document.getElementById("single").checked
let year = document.getElementById("jahre").value
let output = document.getElementById("output")


if ((single == true) && (zvE <= 9408) && (year == 2020)) {
    output.innerHTML = "0" + "€"
} else if ((married == true) && (zvE <= 9408) && (year == 2020)) {
    output.innerHTML = 2 * "0" + "€"
} else if ((single == true) && (9409 <= zvE <= 14532) && (year == 2020)) {
    let y = (zvE - 9408) / 10000
    let secondCaseESt = (972.87 * y + 1400) * y
    output.innerHTML = secondCaseESt.toFixed(2) + "€"
}  else if ((married == true) && (9409 <= zvE <= 14532) && (year == 2020)) {
    let y = (zvE - 9408) / 10000
    let secondCaseESt = ((972.87 * y + 1400) * y) * 2 / 2
    output.innerHTML = secondCaseESt.toFixed(2) + "€"
} else if ((single == true) && (14533 <= zvE <= 57051) && (year == 2020)) {
    let z = (zvE - 14532) / 10000
    let thirdCaseESt = (212.02 * z + 2397) * z + 972.79
    output.innerHTML = thirdCaseESt.toFixed(2) + "€"
} else if ((married == true) && (14533 <= zvE <= 57051) && (year == 2020)) {
    let z = (zvE - 14532) / 10000
    let thirdCaseESt = ((212.02 * z + 2397) * z + 972.79) * 2 / 2
    output.innerHTML = thirdCaseESt.toFixed(2) + "€"
} else if ((single == true) && (57052 <= zvE <= 270500) && (year == 2020)) {
    let fourthCaseESt = (0.42 * zvE) - 8963.74
    output.innerHTML = fourthCaseESt.toFixed(2) + "€"
} else if ((married == true) && (57052 <= zvE <= 270500) && (year == 2020)) {
    let fourthCaseESt = ((0.42 * zvE) - 8963.74) * 2 / 2
    output.innerHTML = fourthCaseESt.toFixed(2) + "€"
} else if ((single == true) && (270.501 <= zvE) && (year == 2020)) {
    let fifthCaseESt = (0.45 * zvE) - 17078.74
    output.innerHTML = fifthCaseESt.toFixed(2) + "€"
} else if ((married == true) && (270.501 <= zvE) && (year == 2020)) {
    let fifthCaseESt = ((0.45 * zvE) - 17078.74) * 2 / 2
    output.innerHTML = fifthCaseESt.toFixed(2) + "€"
} else if ((single == true) && (zvE <= 9168) && (year == 2019)) {
    output.innerHTML = "0" + "€"
} else if ((married == true) && (zvE <= 9168) && (year == 2019)) {
    output.innerHTML = 2 * "0" + "€"
} else if ((single == true) && (9169 <= zvE <= 14254) && (year == 2019)) {
    
}


// } else if ((single == true) && (zvE <= 9168) && (year == 2019)) {
//     document.getElementById("output").innerHTML = "0"
// } else if ((married == true) && (zvE <= 9408) && (year == 2019)) {
//     document.getElementById("output").innerHTML = 2 * "0"
// } 


}

