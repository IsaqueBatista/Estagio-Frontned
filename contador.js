function countA(string) {
    const count = (string.match(/a/gi) || []).length;
    if (count > 0) {
        return `A letra 'a' aparece ${count} vez(es) na string.`;
    } else {
        return "A letra 'a' não aparece na string.";
    }
}

const texto = "Abacaxi amarelo";
console.log(countA(texto));