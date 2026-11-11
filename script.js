function findSumPatterns(matrix) {
    // Escreva seu código aqui

    // Calcula a soma da diagonal principal
    let mainDiagonal = [];
    matrix.forEach((element, index) => {
        mainDiagonal.push(element[index]);
    });
    mainDiagonal = mainDiagonal.reduce((total, valorAtual) => {
        return total + valorAtual;
    }, 0);

    // Calcula a soma da diagonal secundária
    let antiDiagonal = [];
    for (let i = 0; i < matrix.length; i++) {
        antiDiagonal.push(matrix[i][matrix.length - 1 - i]);
    };
    antiDiagonal = antiDiagonal.reduce((total, valorAtual) => {
        return total + valorAtual;
    }, 0);

    // Calcula a soma das bordas
    let border = [];
    // top
    for (let num of matrix[0]) {
        border.push(num);
    };
    // bottom
    for (let num of matrix[matrix.length-1]) {
        border.push(num);
    };
    // left
    for (let index = 1; index < matrix.length-1; index++) {
        border.push(matrix[index][0]);
    };
    // right
    for (let index = 1; index < matrix.length-1; index++) {
        border.push(matrix[index][matrix.length-1]);
    };
    border = border.reduce((acumulador,valorAtual) => {
        return acumulador + valorAtual;
    }, 0);

    // Formata e imprime os resultados
    console.log(`Main diagonal sum: ${mainDiagonal}`);
    console.log(`Anti-diagonal sum: ${antiDiagonal}`);
    console.log(`Border sum: ${border}`);
}
const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
findSumPatterns(arr);