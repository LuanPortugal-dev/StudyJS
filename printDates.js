//Peça para o usuário digitar uma data. Exiba separadamente o dia, o mês e o ano.
//(Obs.: não necessita de laço de repetição)
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


rl.question('Write a data: ', function (date) {

    const day = date.slice(0,2)
    const month = date.slice(3,5)
    const year  =  date.slice(6, )

    console.log(`Dia: ${day}, Mês: ${month}, 'Ano': ${year} `)
})

function SplitDate() {
    //const Date = UserWriteDate()

    const SplitDate = 'dawd'

    return SplitDate
}

SplitDate();
