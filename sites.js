const readline = require('readline');

const r1 = readline.createInterface(
{
    input: process.stdin,
    output: process.stdout 
});

function fazerPergunta(pergunta) 
{
    return new Promise((resolve) => 
    {
        r1.question(pergunta,(resposta) => resolve(parseInt(resposta)))
    })
}

async function iniciarQuiz()
{
    console.log(`Descubra se você tem vocação para Cibersegurança `)


let pontuacaoTotal = 0;

const resposta1 = await fazerPergunta(`Qual seu nível de curiosidade perante o funcionamento das coisas: (1-5): `);
pontuacaoTotal += resposta1;

const resposta2 = await fazerPergunta(`Você gosta da ideia de quebrar o funcionamento de algo criado por outras pessoas? (1-5): `)
pontuacaoTotal += resposta2;

const resposta3 = await fazerPergunta(`Você pensa sobre o quanto da sua vida online está sendo rastreada? (1-5): `)
pontuacaoTotal += resposta3;

const resposta4 = await fazerPergunta(`Qual seu nível de incomo perante as injustiças do mundo? (1-5): `)
pontuacaoTotal += resposta4;

let resultado = '';

if (pontuacaoTotal <= 5 && pontuacaoTotal > 0)
{
    resultado = 'Você deveria tentar Front-End'
}

else if(pontuacaoTotal > 5 && pontuacaoTotal <= 10)
{
    resultado = 'Você se daria bem no Back-End'
}

else if(pontuacaoTotal > 10 && pontuacaoTotal <= 15)
{
    resultado = 'Você tem potencial talvez crie jogos '
}

else if(pontuacaoTotal > 15)
{
    resultado = 'Parabéns, te vejo em breve nos Anonymous'
}

else
{
    resultado = 'Resultado indefinido, tente realizar o quiz novamente.'
}

console.log(`O seu resultado foi ${pontuacaoTotal}`);
console.log(resultado)

r1.close();

}

iniciarQuiz();



