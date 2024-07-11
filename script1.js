function maior() {
    var maior = 0
    var menor = 0
    for (let i = 0; i < 20; i++) {
        let valor = parseFloat(prompt("Digite um valor "));
        if (valor > maior) {
            maior = valor;
        }
        else if (valor < menor) {
            menor = valor;
        }
    }
    document.write("O maior valor é:" + maior + ". O menor valor é :" + menor);
}    
maior();