const isLeapYear = (rok) => {
    rok = Number(rok)
    let zprava = "<i>Zadali jste chybný formát roku</i>"

    console.log(Number.isInteger(rok))
    if (Number.isInteger(rok)) {

        if (rok % 4 === 0) {
            if (rok % 100 === 0 && rok % 400 !== 0) {
                //rok není přestupný
                zprava = "ne"
            }
            else {
                //rok je přestupný
                zprava = "ano"
            }
        }

        else {
            //rok není přestupný
            zprava = "ne"
        }
    }

    return zprava

}

const rok = prompt("Zadejte rok")

document.body.innerHTML += `Rok <strong>${rok}</strong> je přestupný: ${isLeapYear(rok)}.`
