
/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */
export const solutionFn = (num) => {

     if (num < 10) {
        return num;
    }

    let res = num;
  
    while (res>=10) {

         const splitNumber = (res + '').split('').map(Number);

        // Перемножаем все цифры
        res = splitNumber.reduce((product, digit) => product * digit, 1);


   }
   return res

};
