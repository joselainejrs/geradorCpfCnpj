
let nArray = (total, numero) => Array.from(Array(total), () => nAleatorio(numero));
let nAleatorio = (number) => (Math.round(Math.random() * number));
//calcula
let cal = (dividendo, divisor) => Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));

function gerarCpf() {
    document.gerador.numero.value = cpf();

}

function gerarCnpj() {
    document.gerador.numero.value = cnpj();
}



function cpf() {
    let nTotal = 9;
    let n = 9;
    let [n1, n2, n3, n4, n5, n6, n7, n8, n9] = nArray(nTotal, n);

    let digVerificadorPri = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
    digVerificadorPri = 11 - (cal(digVerificadorPri, 11));
    if (digVerificadorPri >= 10) digVerificadorPri = 0

    let digVerificadorSeg = digVerificadorPri * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n9 * 10 + n1 * 11;
    digVerificadorSeg = 11 - (cal(digVerificadorSeg, 11));
    if (digVerificadorSeg >= 10) digVerificadorSeg = 0

    // mascara

    if (document.gerador.mascara.checked) {
        return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${digVerificadorPri}${digVerificadorSeg}`
    } else
        return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${digVerificadorPri}${digVerificadorSeg}`

}

function cnpj() {
    let nTotal = 8;
    let n = 9;
    let [n1, n2, n3, n4, n5, n6, n7, n8] = nArray(nTotal, n)
    let n9 = 0;
    let n10 = 0;
    let n11 = 0;
    let n12 = 1;

    let digVerificadorPri = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
    digVerificadorPri = 11 - (cal(digVerificadorPri, 11));
    if (digVerificadorPri >= 10) digVerificadorPri = 0;

    let digVerificadorSeg = digVerificadorPri * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 * n5 * 2 + n4 * 3 + n3 * 4 + n9 * 5 + n1 * 6;
    digVerificadorSeg = 11 - (cal(digVerificadorSeg, 11));
    if (digVerificadorSeg >= 10) digVerificadorSeg = 0;

    // mascara

    if (document.gerador.mascara.checked) {
        return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${digVerificadorPri}${digVerificadorSeg}`
    } else
        return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${digVerificadorPri}${digVerificadorSeg}`


}



