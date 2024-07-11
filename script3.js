function mediaTurma() {
    var mediasponderadas = [];
    for (var aluno = 1; aluno <= 20; aluno++) {
        var nota1 = parseFloat(prompt("Digite a primeira nota do aluno $(aluno:"));
        var nota2 = parseFloat(prompt("Digite a segunda nota do aluno $(aluno:"));
        var nota3 = parseFloat(prompt("Digite a terceira nota do aluno $(aluno:"));
        if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
            var mp = (nota1 * 2 + nota2 * 4 + nota3 * 3) / 9;
            mediasponderadas.push(mp);
            document.write(`Média ponderada do aluno ${aluno} = ${mp.toFixed(2)} <br> `);
        } else {
            document.write(`Notas inválidas para o aluno ${aluno} <br>`);

        }
    }
    if (mediasponderadas.length > 0) {
        var somaMedias = mediasponderadas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        var mediageral = somaMedias / mediasponderadas.length;
        document.write(`\n Média Geral da turma: ${mediageral.toFixed(2)}`);
    }
    else {
        document.write(`Não deu para calcular a média da turma :c`);
    }
}

