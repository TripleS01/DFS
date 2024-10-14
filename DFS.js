function closedIsland(matrix) {
    const N = matrix.length;
    const M = matrix[0].length;

    if (N < 1 || N > 500 || M < 1 || M > 500) {
        throw new Error("Размерите на матрицата трябва да бъдат между 1 ≤ N,M ≤ 500.");
    }

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= N || j >= M) {
            return false;
        }

        if (matrix[i][j] === 0) {
            return true;
        }

        if (matrix[i][j] === 1) {
            // Маркираме клетката, за да не я проверяваме отново
            matrix[i][j] = 0;

            // Обхождаме всички четири посоки
            const left = dfs(i, j - 1);
            const right = dfs(i, j + 1);
            const up = dfs(i - 1, j);
            const down = dfs(i + 1, j);

            // Връщаме true само ако всички посоки водят до вода
            return left && right && up && down;
        }

        return false; // Ако върне true countClosedIslands++
    }

    let countClosedIslands = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            // Стартираме DFS само от клетки с 1 (земя)
            if (matrix[i][j] === 1) {
                // Извикваме DFS и увеличаваме броя, ако върне true
                if (dfs(i, j)) {
                    countClosedIslands++;
                }
            }
        }
    }

    return countClosedIslands;
}

const matrix1 = [
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 1, 1, 0, 0, 1],
    [0, 1, 0, 1, 0, 0, 0, 1],
    [0, 1, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 1]
];
const numberOfClosedIslands1 = closedIsland(matrix1);
console.log(`Брой затворени острови: ${numberOfClosedIslands1}`);

const matrix2 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];
const numberOfClosedIslands2 = closedIsland(matrix2);
console.log(`Брой затворени острови: ${numberOfClosedIslands2}`);
