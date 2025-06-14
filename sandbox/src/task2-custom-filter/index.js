/**
 * Кастомная реализация метода Array.prototype.filter
 * 
 * @param {Array} array Массив
 * @param {(...args: any[]) => Boolean} filterFn Фильтрующая булева функция (та, которая в качестве результата возвращает true или false)
 * @param {Boolean} inplace Флаг "модифицируем исходный массив или нет", 
 * @returns {Array} Отфильтрованный массив
 */
export const filter = (array, filterFn, inplace = false) => {
    const result=[]

    for (let i = 0; i < array.length; i++) {
        if(filterFn(array[i],i,array)){
            result.push(array[i])
        }

    }
    if (inplace) {
        array.length = 0; 
        for (let i = 0; i < result.length; i++) {
            array.push(result[i]); 
        }
        return array;
    }

    return result;
};
