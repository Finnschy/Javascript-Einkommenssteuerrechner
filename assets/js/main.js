function steuerRechner() {
    event.preventDefault()
    let zvE = parseInt(document.getElementById("numInput").value)
    let married = document.getElementById("married").checked
    let single = document.getElementById("single").checked
    let year = document.getElementById("jahre").value
    let output = document.getElementById("output")
    let y
    let z
    let secondCaseESt
    let thirdCaseESt
    let fourthCaseESt
    let fifthCaseESt
    let comma = ","

    if ((single == true) && (zvE <= 9408) && (year == 2020)) {
        output.innerHTML = "0" + "€"
        console.log("00");

    } else if ((married == true) && (zvE <= 9408) && (year == 2020)) {
        output.innerHTML = 2 * "0" + "€"
        console.log("01");

    }
    
    if ((single == true) && (zvE >= 9409 && zvE <= 14532) && (year == 2020)) {
        y = (zvE - 9408) / 10000
        secondCaseESt = (972.87 * y + 1400) * y
        output.innerHTML = secondCaseESt.toFixed(2) + "€"
        console.log("02");

    } else if ((married == true) && (zvE >= 9409 && zvE <= 14532) && (year == 2020)) {
        y = (zvE - 9408) / 10000
        secondCaseESt = ((972.87 * y + 1400) * y) * 2 / 2
        output.innerHTML = secondCaseESt.toFixed(2) + "€"
        console.log("03");

    }
    if ((single == true) && (zvE >= 14533 && zvE <= 57051) && (year == 2020)) {
        z = (zvE - 14532) / 10000
        thirdCaseESt = (212.02 * z + 2397) * z + 972.79
        output.innerHTML = thirdCaseESt.toFixed(2) + "€"
        console.log("04");

    } else if ((married == true) && (zvE >= 14533 && zvE <= 57051) && (year == 2020)) {
        z = (zvE - 14532) / 10000
        thirdCaseESt = ((212.02 * z + 2397) * z + 972.79) * 2 / 2
        output.innerHTML = thirdCaseESt.toFixed(2) + "€"
        console.log("05");
    }

    if ((single == true) && (zvE >= 57052 && zvE <= 270500) && (year == 2020)) { 
        fourthCaseESt = (0.42 * zvE) - 8963.74
        output.innerHTML = fourthCaseESt.toFixed(2) + "€"
        console.log("06");

    } else if ((married == true) && (zvE >= 57052 && zvE <= 270500) && (year == 2020)) { 
        fourthCaseESt = ((0.42 * zvE) - 8963.74) * 2 / 2
        output.innerHTML = fourthCaseESt.toFixed(2) + "€"
        console.log("07");
    }

    if ((single == true) && (270501 <= zvE) && (year == 2020)) { 
        fifthCaseESt = (0.45 * zvE) - 17078.74
        output.innerHTML = fifthCaseESt.toFixed(2) + "€"
        console.log("08");

    } else if ((married == true) && (270501 <= zvE) && (year == 2020)) { 
        fifthCaseESt = ((0.45 * zvE) - 17078.74) * 2 / 2
        output.innerHTML = fifthCaseESt.toFixed(2) + "€"
        console.log("09");
    }

    if ((single == true) && (zvE <= 9168) && (year == 2019)) {
        output.innerHTML = "0" + "€"
        console.log("10");

    } else if ((married == true) && (zvE <= 9168) && (year == 2019)) {
        output.innerHTML = 2 * "0" + "€"
        console.log("11");
    }

    if ((single == true) && (zvE >= 9169 && zvE <= 14254) && (year == 2019)) {
        y = (zvE - 9168) / 10000
        secondCaseESt = (980.14 * y + 1400) * y
        output.innerHTML = secondCaseESt.toFixed(2) + "€"
        console.log("12");

    } else if ((married == true) && (zvE >= 9169 && zvE <= 14254) && (year == 2019)) {
        y = (zvE - 9168) / 10000
        secondCaseESt = ((980.14 * y + 1400) * y) * 2 / 2
        output.innerHTML = secondCaseESt.toFixed(2) + "€"
        console.log("13");
    }

    if ((single == true) && (zvE >= 14255 && zvE <= 55960) && (year == 2019)) {
        z = (zvE - 14254) / 10000
        thirdCaseESt = (216.16 * z + 2397) * z + 965.58
        output.innerHTML = thirdCaseESt.toFixed(2) + "€"
        console.log("14");

    } else if ((married == true) && (zvE >= 14255 && zvE <= 55960) && (year == 2019)) {
        z = (zvE - 14254) / 10000
        thirdCaseESt = ((216.16 * z + 2397) * z + 965.58) * 2 / 2
        output.innerHTML = thirdCaseESt.toFixed(2) + "€"
        console.log("15");

    }
    if ((single == true) && (zvE >= 55961 && zvE <= 265326) && (year == 2019)) { 
        fourthCaseESt = (0.42 * zvE) - 8780.90
        output.innerHTML = fourthCaseESt.toFixed(2) + "€"
        console.log("16");

    } else if ((married == true) && (zvE >= 55961 && zvE <= 265326) && (year == 2019)) { 
        fourthCaseESt = ((0.42 * zvE) - 8780.90) * 2 / 2
        output.innerHTML = fourthCaseESt.toFixed(2) + "€"
        console.log("17");

    }
    if ((single == true) && (265327 <= zvE) && (year == 2019)) { 
        fifthCaseESt = ((0.45 * zvE) - 16740.68)
        output.innerHTML = fifthCaseESt.toFixed(2) + "€"
        console.log("18");

    } else if ((married == true) && (265327 <= zvE) && (year == 2019)) { 
        fifthCaseESt = ((0.45 * zvE) - 16740.68) * 2 / 2
        output.innerHTML = fifthCaseESt.toFixed(2) + "€"
        console.log("19");

    }
    if ((single == true) && (zvE <= 9000) && (year == 2018)) {
        output.innerHTML = "0" + "€"
        console.log("20");

    } else if ((married == true) && (zvE <= 9000) && (year == 2018)) {
        output.innerHTML = 2 * "0" + "€"
        console.log("21");

    }

    if ((single == true) && (zvE >= 9001 && zvE <= 13996) && (year == 2018)) {
        y = (zvE - 9000) / 10000
        secondCaseESt = (997.80 * y + 1400) * y
        output.innerHTML = secondCaseESt.toFixed(2) + "€"
        console.log("22");

    } else if ((married == true) && (zvE >= 9001 && zvE <= 13996) && (year == 2018)) {
        y = (zvE - 9000) / 10000
        secondCaseESt = ((997.80 * y + 1400) * y) * 2 / 2
        output.innerHTML = secondCaseESt.toFixed(2) + "€"
        console.log("23");

    }
    if ((single == true) && (zvE >= 13997 && zvE <= 54949) && (year == 2018)) {
        z = (zvE - 13996) / 10000
        thirdCaseESt = (220.13 * z + 2397) * z + 948.49
        output.innerHTML = thirdCaseESt.toFixed(2) + "€"
        console.log("24");

    } else if ((married == true) && (zvE >= 13997 && zvE <= 54949) && (year == 2018)) {
        z = (zvE - 13996) / 10000
        thirdCaseESt = ((220.13 * z + 2397) * z + 948.49) * 2 / 2
        output.innerHTML = thirdCaseESt.toFixed(2) + "€"
        console.log("25");

    }
    if ((single == true) && (zvE >= 54950 && zvE <= 260532) && (year == 2018)) { // ab hier rechnet er nicht mehr richtig
        fourthCaseESt = (0.42 * zvE) - 8621.75
        output.innerHTML = fourthCaseESt.toFixed(2) + "€"
        console.log("26");

    } else if ((married == true) && (zvE >= 54950 && zvE <= 260532) && (year == 2018)) { // ab hier rechnet er nicht mehr richtig
        fourthCaseESt = ((0.42 * zvE) - 8621.75) * 2 / 2
        output.innerHTML = fourthCaseESt.toFixed(2) + "€"
        console.log("27");
    }

    if ((single == true) && (260533 <= zvE) && (year == 2018)) { // ab hier rechnet er nicht mehr richtig
        fifthCaseESt = ((0.45 * zvE) - 16437.70)
        output.innerHTML = fifthCaseESt.toFixed(2) + "€"
        console.log("28");

    } else if ((married == true) && (260533 <= zvE) && (year == 2018)) { // ab hier rechnet er nicht mehr richtig
        fifthCaseESt = ((0.45 * zvE) - 16437.70) * 2 / 2
        output.innerHTML = fifthCaseESt.toFixed(2) + "€"
        console.log("29");

    }
    

}

