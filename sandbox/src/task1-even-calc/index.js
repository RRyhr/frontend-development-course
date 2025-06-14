/**
 * Возвращает сумму всех чётных чисел в массиве
 * 
 * @param {number[]} numbers Массив чисел
 * @returns {number} Сумма чётных чисел
 */
export const solutionFn = (numbers) => {
    
    return numbers
        .filter(item => item % 2 === 0).reduce((acc, item) => acc + item, 0);
};
 