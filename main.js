console.log("This is fun!");
const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    console.log(conjoinedWord)
}

conjunction("Master", "Card")



    const modSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    modSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
    })


console.log(HTMLRepresentation)




















const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix
    }

    
}

let nameMaker = llamaNamer()
console.log(nameMaker())
