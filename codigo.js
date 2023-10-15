var niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
var nomeHeroi = prompt("Digite o nome do Herói: ");
var numVitorias = prompt("Digite a quantidade de VITÓRIAS: ");
var numDerrotas = prompt("Digite a quantidade de DERROTAS: ");

main();

function main() {
    menssagemBemVindo();
    var saldoVitorias = calculoVitorias();
    mensagemRanking(saldoVitorias);
}

function menssagemBemVindo() {
    console.log("Bem vindo(a) " + nomeHeroi);
}

function calculoVitorias() {
    var saldoVitorias = numVitorias - numDerrotas;
    return saldoVitorias;
}

function mensagemRanking(saldoVitorias) {
    var nivel = "";

    if (saldoVitorias < 10) {
        nivel = niveis[0];
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = niveis[1];
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = niveis[2];
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = niveis[3];
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = niveis[4];
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = niveis[5];
    } else {
        nivel = niveis[6];
    }

    console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de " + nivel);
}

