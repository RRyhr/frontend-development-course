/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */
export const solutionFn = (obj) => {
    
    const objectData={};
    
    for (const key in obj) {
        const type=typeof(obj[key])

            if(objectData[type]){
                objectData[type] += 1;

            }else {
            objectData[type] = 1;
        }
     


    }
    return objectData





};